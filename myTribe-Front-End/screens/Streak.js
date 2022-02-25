import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { useState } from "react";
import streak from "../assets/fire-streak.png";

const Streak = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("count:", count);
  };

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.streak} source={streak}>
        <View style={styles.streakOverlay}>
          {/* <Text style={styles.streakText}>3</Text> */}
        </View>
      </ImageBackground>
      <Text style={styles.heading} onPress={handleIncrement}>
        {" "}
        {count} day streak!{" "}
      </Text>
      <Text style={styles.subHeading}>
        Complete your chores everyday to build your streak!
      </Text>
      <View style={styles.btnContainer}>
        <Button title="Back to Home" color="#FFBD00" />
      </View>
    </View>
  );
};

export default Streak;

const styles = StyleSheet.create({
  // Containers
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },

  btnContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  // Text
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },

  subHeading: {
    fontSize: 20,
    color: "black",
    padding: 30,
  },

  streakText: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    paddingRight: 50,
  },

  //Image
  streak: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
  },
  streakOverlay: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    paddingLeft: 50,
    paddingRight: 50,
    position: "absolute",
    left: 10,
  },
});
