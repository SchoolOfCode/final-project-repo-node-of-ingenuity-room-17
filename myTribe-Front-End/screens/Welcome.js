import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import UserThumbnail from "../components/UserThumbnail";
import { useState, useEffect, useContext } from "react";
import headerImage from "../assets/welcome-background.jpeg";
import {pageState} from "../App"

const Welcome = (props) => {
  const {family, setFamily} = useContext(pageState)

  // useEffect(() => {
  //   const userFamily = props.navigation.getParam("family");
  //   setFamily(userFamily);
  // }, []);

  const selectHandler = (name) => {
    setFamily({...family, memberSession: name})
    props.navigation.navigate({ routeName: "Dashboard" });
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground
          resizeMode="cover"
          style={styles.header}
          source={headerImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.heading}>Welcome back</Text>
            <Text style={styles.subHeading}>
              Start taking control of your household.
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.profiles}>
          <Text style={styles.sectionHeading}>Please select your account</Text>
          {family &&
            family.members.map((el) => (
              <UserThumbnail
                key={el.id}
                name={el.name}
                isParent={el.isParent}
                selectHandler={selectHandler}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
  },

  scrollView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F0F0",
  },

  header: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
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
  },
  profiles: {
    padding: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },
});
export default Welcome;
