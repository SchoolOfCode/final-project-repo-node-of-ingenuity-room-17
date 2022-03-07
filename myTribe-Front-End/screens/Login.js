import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useContext } from "react";
import bgImage from "../assets/main-background.jpeg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import authErrorCheck from "../utils/authErrorCheck";
import { getFamily } from "../firebase/firestore";
import {pageState} from "../App"

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {family, setFamily} = useContext(pageState)


  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        getFamily(user.uid).then((res) => {
          setFamily(res[0])
          if (res[0].familyName === undefined) {
            props.navigation.navigate({ routeName: "Family" });
          }
          props.navigation.navigate({ routeName: "Welcome" });
        });
      }
    );
  };

  return (
    <ImageBackground source={bgImage} style={styles.container}>
      <StatusBar color="white" style="light-content" />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.heading}>tribe.</Text>
          <Text style={styles.subHeading}>Your family, your rules.</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.authBox}>
          <TextInput
            style={styles.input}
            placeholder="youremail@email.com"
            placeholderTextColor={"black"}
            onChangeText={(text) => setEmail(text)}
            autoFocus
          ></TextInput>
          <TextInput
            style={[styles.input, styles.lastInput]}
            placeholder="password"
            placeholderTextColor={"black"}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          ></TextInput>

          <Text style={styles.error}>{error}</Text>
          <Button
            style={styles.btn}
            title="Login"
            color="white"
            onPress={handleSignIn}
          />
          <Button
            title="Create Account"
            color="white"
            onPress={() =>
              props.navigation.navigate({
                routeName: "SignUp",
              })
            }
          />
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },

  overlay: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "white",
    paddingTop: `35%`,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 150,
    paddingBottom: 150,
  },

  heading: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
  },
  subHeading: {
    fontSize: 24,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
  },

  lastInput: {
    marginBottom: 20,
  },
  error: {
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
});
