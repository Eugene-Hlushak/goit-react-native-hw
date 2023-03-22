// import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./imgs/Photo-BG.png")}
        style={styles.image}
      >
        <RegistrationScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
