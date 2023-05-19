import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export default function LogInScreen({ navigation }) {
  const [loginValue, setLoginValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [paswordValue, setPaswordValue] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const loginInputHandler = (text) => {
    setLoginValue(text);
  };

  const emailInputHandler = (text) => {
    setEmailValue(text);
  };

  const passwordInputHandler = (text) => {
    setPaswordValue(text);
  };

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const AddPhoto = () => {};

  const onSubmit = async () => {
    const auth = getAuth();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        paswordValue
      );

      const user = auth.currentUser;
      console.log("registered user --> ", user);
      console.log("Please enter a username and password");
      if (user) {
        resetForm();
        navigation.navigate("PostsScreen", { loginValue, emailValue });
      } else {
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error! Code --> ${errorCode}. ${errorMessage}`);
    }
  };

  const resetForm = () => {
    setEmailValue("");
    setLoginValue("");
    setPaswordValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../imgs/Photo-BG.png")}
          style={styles.imageBg}
        >
          <View style={styles.registrationScreen}>
            <View style={styles.addPhotoBox}>
              <Image style={styles.image} />

              <TouchableOpacity style={styles.addPhotoBtn} onPress={AddPhoto}>
                <Ionicons
                  style={styles.addPhotoIcon}
                  name="add-circle-outline"
                  size={25}
                  color="#FF6C00"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                placeholder="Логін"
                inputMode="text"
                value={loginValue}
                onChangeText={loginInputHandler}
                style={[styles.formInput, styles.formInputContainer]}
                placeholderTextColor={"#BDBDBD"}
              />
              <TextInput
                placeholder="Електронна пошта"
                inputMode="email"
                value={emailValue}
                onChangeText={emailInputHandler}
                style={[styles.formInput, styles.formInputContainer]}
                placeholderTextColor={"#BDBDBD"}
              />
              <View style={styles.formInputPassContainer}>
                <TextInput
                  placeholder="Пароль"
                  value={paswordValue}
                  onChangeText={passwordInputHandler}
                  secureTextEntry={hidePassword}
                  style={styles.formInput}
                  placeholderTextColor={"#BDBDBD"}
                />
                <TouchableOpacity
                  onPress={toggleHidePassword}
                  style={styles.showPass}
                  activeOpacity={0.4}
                >
                  <Text style={styles.showPassTitle}>
                    {hidePassword ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.regBtn}
                activeOpacity={0.5}
                onPress={onSubmit}
              >
                <Text style={styles.regBtnTitle}>Зареєструватись</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.linkToLogIn}>Вже є аккаунт? Увійти.</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  registrationScreen: {
    position: "relative",
    flex: 0.6,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  addPhotoBox: {
    alignItems: "center",
  },

  image: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addPhotoBtn: {
    position: "absolute",
    top: 21,
    right: 124,
    width: 25,
    height: 25,
  },

  formContainer: {
    paddingTop: 92,
  },

  title: {
    marginBottom: 32,
    fontFamily: "Comfortaa-Bold",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "500",
    color: "#212121",
  },

  formInput: {
    height: 50,
    padding: 15,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    fontSize: 16,
  },

  formInputContainer: {
    marginBottom: 16,
  },

  formInputPassContainer: {
    position: "relative",
    marginBottom: 43,
  },

  showPass: {
    position: "absolute",
    right: 15,
    top: 15,
  },

  showPassTitle: {
    fontSize: 16,
    color: "#1B4371",
  },

  regBtn: {
    height: 51,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  regBtnTitle: {
    fontFamily: "Comfortaa-Bold",
    fontSize: 16,
    color: "#ffffff",
  },

  linkToLogIn: {
    fontFamily: "Comfortaa-Bold",
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
  },
});
