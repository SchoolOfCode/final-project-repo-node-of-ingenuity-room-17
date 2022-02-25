import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import dashImage from "../assets/dashImage.jpeg";
import flame from "../assets/fire-streak.png";

const Dashboard = () => {
  return (
    <View>
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
            <Text style={styles.statusNumber}>4</Text>
          </View>
          <View style={styles.statusButton}>
            <Image style={styles.flame} source={flame} />
          </View>
        </View>
      </ImageBackground>
      {/* Main Content */}
      <View style={styles.container}>
        <View style={styles.dashboardButton}>
          <Text>WORK BRO</Text>
        </View>
      </View>
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
    position: "absolute",
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
    flex: 1,
    width: "100%",
    height: "78%",
    backgroundColor: "#FEB800",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    top: 200,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    bottom: 30,
  },

  statusButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
    width: "35%",
    height: "60%",
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
    fontSize: 25,
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
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F0F0",
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,

    position: "relative",
    top: 370,
  },

  mainBlock: {
    backgroundColor: "#F2F0F0",
    width: "100%",
    height: "60%",
    top: 300,
  },

  dashboardButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    height: "60%",
    borderRadius: 10,
    zIndex: 5,
  },
});
