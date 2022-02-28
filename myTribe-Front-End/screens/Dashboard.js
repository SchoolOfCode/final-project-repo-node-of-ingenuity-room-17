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
} from "react-native";
import React from "react";
import dashImage from "../assets/dashImage.jpeg";
import flame from "../assets/fire-streak.png";
import manageFamily from "../assets/ManageFamily.png";
import viewChores from "../assets/viewChores.png";
import manageChores from "../assets/manageChores.png";
import showStreak from "../assets/showStreak.png";
import { TouchableHighlight } from "react-native-gesture-handler";

const Dashboard = (props) => {
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
          <Text style={styles.subHeading}>Emma</Text>
        </View>
        {/* Status Bar */}
        <View style={[styles.statusBlock, { zIndex: 2 }]}>
          <View style={styles.statusButton}>
            <Text style={styles.statusText}>Chores</Text>
            <Text style={styles.statusNumber}>5</Text>
          </View>
          <View style={styles.statusButton}>
            <Image style={styles.flame} source={flame} />
          </View>
        </View>
      </ImageBackground>
      {/* Main Content */}
      <ScrollView style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
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
          </TouchableHighlight>
          <View style={styles.mainButton}>
            <Image style={styles.mainButtonImage} source={manageChores} />
            <Text style={styles.mainButtonText}>Manage Chores</Text>
          </View>
          <View style={styles.mainButton}>
            <Image style={styles.mainButtonImage} source={manageFamily} />
            <Text style={styles.mainButtonText}>Manage Family</Text>
          </View>
          <View style={styles.mainButton}>
            <Image style={styles.mainButtonImage} source={showStreak} />
            <Text style={styles.mainButtonText}>Show Streak</Text>
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 20,
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
    height: "70%",
    width: "80%",
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
});
