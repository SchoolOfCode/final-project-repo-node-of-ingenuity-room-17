import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import dashImage from "../assets/dashImage.jpeg";

const Dashboard = () => {
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        style={styles.header}
        source={dashImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.heading}>Dashboard</Text>
          <Text style={styles.subHeading}>Emma</Text>
        </View>
        <View style={[styles.orangeBlock, { zIndex: 1 }]}></View>
      </ImageBackground>
      <ScrollView style={[styles.greyBlock]}></ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
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
  orangeBlock: {
    width: "100%",
    height: "40%",
    backgroundColor: "#FEB800",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    top: 200,
  },
  greyBlock: {
    backgroundColor: "pink",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
