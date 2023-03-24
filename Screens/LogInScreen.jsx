import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
} from "react-native";

export default function RegistrationScreen({ navigation }) {
  const [emailValue, setEmailValue] = useState("");
  const [paswordValue, setPaswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const emailInputHandler = (text) => {
    setEmailValue(text);
  };

  const passwordInputHandler = (text) => {
    setPaswordValue(text);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = () => {
    console.log(`UserData:
     email - ${emailValue},
     password - ${paswordValue}`);
    resetForm();
    navigation.navigate("PostsScreen", { emailValue });
  };
  const resetForm = () => {
    setEmailValue("");
    setPaswordValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../imgs/Photo-BG.png")}
          style={styles.imageBg}
        >
          <View style={styles.loginContainer}>
            <View style={styles.formContainer}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={[styles.formInput, styles.formInputContainer]}
                placeholder="Електронна пошта"
                inputMode="email"
                value={emailValue}
                onChangeText={emailInputHandler}
                placeholderTextColor={"#BDBDBD"}
              />
              <View style={styles.formInputPassContainer}>
                <TextInput
                  style={styles.formInput}
                  placeholder="Пароль"
                  value={paswordValue}
                  onChangeText={passwordInputHandler}
                  secureTextEntry={showPassword}
                  placeholderTextColor={"#BDBDBD"}
                />
                <TouchableOpacity
                  style={styles.showPass}
                  onPress={toggleShowPassword}
                  activeOpacity={0.4}
                >
                  <Text style={styles.showPassTitle}>
                    {showPassword ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                activeOpacity={0.5}
                onPress={onSubmit}
              >
                <Text style={styles.loginBtnTitle}>Увійти</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.linkToLogIn}>
                Немає аккаунту? Зареєструватись.
              </Text>
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

  loginContainer: {
    position: "relative",
    flex: 0.5,

    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  formContainer: {
    paddingTop: 32,
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

  loginBtn: {
    height: 51,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  loginBtnTitle: {
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
