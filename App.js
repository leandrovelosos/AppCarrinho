import React from "react";
import { StatusBar } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
export default function App() {
  return (
  <NavigationContainer>
    <StatusBar backgroundColor="FAFAFA" barStyle="dark-content"/>
    <Routes/>
  </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFF"
  }
})


