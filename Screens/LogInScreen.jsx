import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function RegistrationScreen() {
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

  return (
    <View style={styles.registrationScreen}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
          style={[styles.formInput, styles.formInputContainer]}
          placeholder="Електронна пошта"
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
        <TouchableOpacity style={styles.regBtn} activeOpacity={0.5}>
          <Text style={styles.regBtnTitle}>Увійти</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.linkToLogIn}>Нема аккаунту? Зареєструватися.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  registrationScreen: {
    position: "relative",
    flex: 0.4,

    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  formContainer: {
    paddingTop: 32,
  },

  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
    marginBottom: 32,
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

  regBtn: {
    height: 51,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  regBtnTitle: {
    fontSize: 16,
    color: "#ffffff",
  },

  linkToLogIn: {
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
  },
});
