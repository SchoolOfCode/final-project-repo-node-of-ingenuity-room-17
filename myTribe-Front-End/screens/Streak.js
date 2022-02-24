import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
  } from "react-native";
  import { useState } from "react";
  import streak from '../assets/fire-streak.png'
  

const Streak = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.streak} source={streak} />
      <Text style={styles.heading}> 1 day streak! </Text>
      <Text style={styles.subHeading}>Complete your chores everyday to build your streak!</Text>
    </View>
  )
}

export default Streak

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
      },
    
      heading: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
      },

      subHeading: {
        fontSize: 20,
        color: "white",
      },
})
