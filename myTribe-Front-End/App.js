import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Streak from "./screens/Streak";
import React from 'react';
import {createContext} from 'react'
import ChoresNavigator from "./navigation/NavigationStack";

export let pageState = React.createContext({})

export default function App() {
  const [family, setFamily] = useState({})
  return <pageState.Provider value={{family, setFamily}}>
  <ChoresNavigator />
  </pageState.Provider>;

}

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    width: "100%",
  },
});
