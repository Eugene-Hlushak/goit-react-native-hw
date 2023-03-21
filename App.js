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

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./imgs/Photo-BG.png")}
        style={styles.image}
      >
        <View style={styles.registrationScreen}>
          <View style={styles.addPhotoBox}></View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.formInput} placeholder="Логін" />
            <TextInput
              style={styles.formInput}
              placeholder="Електронна пошта"
            />
            <TextInput style={styles.formInput} placeholder="Пароль" />
            <Button title="Зареєструватися" />
          </View>
          <Text>Вже є аккаунт? Увійти.</Text>
        </View>
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

  registrationScreen: {
    position: "relative",
    flex: 0.5,
    // height: 549,
    paddingHorizontal: 16,

    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  addPhotoBox: {
    position: "absolute",
    // marginLeft: 150,
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  formContainer: {
    // backgroundColor: "lightgray",
  },

  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    // lineHeight: 35 / 30,
    color: "#212121",
    marginBottom: 10,
  },

  formInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    marginBottom: 5,
    padding: 5,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
});
