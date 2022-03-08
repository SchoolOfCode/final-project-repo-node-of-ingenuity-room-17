import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import dashImage from "../assets/dashImage.jpeg";
import flame from "../assets/fire-streak.png";
import manageFamily from "../assets/ManageFamily.png";
import viewChores from "../assets/viewChores.png";
import manageChores from "../assets/manageChores.png";
import showStreak from "../assets/showStreak.png";
import AddChores from "./AddChores";
import {pageState} from "../App"

const Dashboard = (props) => {
  const {family, setFamily} = useContext(pageState)
  // const [members, setMembers] = useState("");
  // const [doc, setDocID] = useState("");
  // useEffect(() => {
  //   const newFamily = props.navigation.getParam("family");
  //   setFamily(newFamily);
  //   setMembers(newFamily.members);
  //   setDocID(props.navigation.getParam("docID"));
  // }, []);

  function addChoresHandler(name) {
    props.navigation.setParams({ routeName: "AddChores" });
    props.navigation.navigate("AddChores", {
      family: family,
      member: name,
    });
  }

  function addFamilyHandler(name) {
    props.navigation.setParams({ routeName: "Family" });
    props.navigation.navigate("Family", {
      family: family,
      member: name,
    });
  }

//COUNTS CHORES COMPLETED FOR STREAK BOX
  const choreStreak = family.chores.filter((el)=>{
    return el.isComplete
    })
    
//COUNTS CHORES TODO FOR STATUS BOX
    const choresToDo = family.chores.filter((el)=>{
      return !el.isComplete
      })

  return (
    <View style={{ flex: 1 }}>
      {/* Top Image */}
      <ImageBackground
        resizeMode="cover"
        style={styles.header}
        source={dashImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.heading}>Dashboard</Text>
          <Text style={styles.subHeading}></Text>
        </View>
        {/* Status Bar */}
        <View style={[styles.statusBlock, { zIndex: 2 }]}>
          <View style={styles.statusButton}>
            <Text style={styles.statusText}>Chores</Text>
            <Text style={styles.statusNumber}>{choresToDo.length}</Text>
          </View>
          <View style={styles.statusButton}>
          <Text style={styles.streakText}>{choreStreak.length}</Text>
            <Image style={styles.flame} source={flame} />
          </View>
        </View>
      </ImageBackground>
      {/* Main Content */}
      <ScrollView style={styles.container}>
        <View style={styles.buttonContainer}>
          {/* Link image to choreslist route */}
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate({
                routeName: "ChoreList",
              })
            }
          >
            <View style={styles.mainButton}>
              <Image style={styles.mainButtonImage} source={viewChores} />

              <Text style={styles.mainButtonText}>View Chores</Text>
            </View>
          </TouchableOpacity>
          {/* Link to Addchores route */}
          <TouchableOpacity onPress={addChoresHandler}>
            <View style={styles.mainButton}>
              <Image style={styles.mainButtonImage} source={manageChores} />
              <Text style={styles.mainButtonText}>Add Chores</Text>
            </View>
          </TouchableOpacity>

          {/* Link to Manage family route */}
          <TouchableOpacity onPress={addFamilyHandler}>
            <View style={styles.mainButton}>
              <Image style={styles.mainButtonImage} source={manageFamily} />
              <Text style={styles.mainButtonText}>Manage Family</Text>
            </View>
          </TouchableOpacity>
          {/* Link to Show streak route  - NEEDS ADDING*/}
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate({
                routeName: "Streak",
              })
            }
          >
            <View style={styles.mainButton}>
              <Image style={styles.mainButtonImage} source={showStreak} />
              <Text style={styles.mainButtonText}>Show Streak</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Button
          title="Log Out"
          color="#FEB800"
          onPress={() =>
            props.navigation.navigate({
              routeName: "Login",
            })
          }
        />
      </ScrollView>
      {/* <View style={styles.btnContainer}></View> */}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  //TOP IMAGE
  header: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
    position: "relative",
  },
  overlay: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingLeft: 50,
    paddingRight: 50,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  subHeading: {
    fontSize: 20,
    color: "white",
    marginTop: 40,
  },

  //STATUS BAR
  statusBlock: {
    // flex: 1,
    width: "100%",
    height: "50%",
    backgroundColor: "#FEB800",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // position: "relative",
    top: -18,
    // zIndex: 2,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    // bottom: 30,
  },

  statusButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -8,
    width: "30%",
    height: "77%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  statusText: {
    fontWeight: "bold",
    paddingTop: 15,
    textAlign: "center",
    fontSize: 20,
  },
  statusNumber: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
    color: "#FEB800",
  },
  flame: {
    height: "65%",
    width: "70%",
  },

  // MAIN CONTENT
  container: {
    backgroundColor: "#F2F0F0",
    zIndex: 1,
    width: "100%",
    height: "100%",
    textAlign: "center",
    color: "black",
    top: 100,
    borderRadius: 10,
  },

  buttonContainer: {
    color: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
    width: "100%",
    flexWrap: "wrap",
  },

  mainButton: {
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    width: 150,
    height: 130,
    borderRadius: 15,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  mainButtonText: {
    fontSize: 18,
    padding: 5,
    alignSelf: "center",
    top: 10,
  },
  mainButtonImage: {
    height: 60,
    width: 60,
    alignSelf: "center",
  },
  //LOGOUT BUTTON
  btnContainer: {
    fontWeight: "bold",
    width: "100%",
    height: 100,
    fontSize: 20,
    alignItems: "center",
    marginTop: 30,
    zIndex: 5,
  },
  streakText: {
    position: "absolute",
    zIndex: 2,
    top: 45,
    textAlign: 'center',
    fontSize: 24,
  }
});
