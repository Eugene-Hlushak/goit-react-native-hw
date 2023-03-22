import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function RegistrationScreen() {
  const [loginValue, setLoginValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [paswordValue, setPaswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const loginInputHandler = (text) => {
    setLoginValue(text);
  };

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
      <View style={styles.addPhotoBox}></View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Логін"
          value={loginValue}
          onChangeText={loginInputHandler}
          placeholderTextColor={"#BDBDBD"}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Електронна пошта"
          value={emailValue}
          onChangeText={emailInputHandler}
          placeholderTextColor={"#BDBDBD"}
        />
        <View>
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
          >
            <Text style={styles.showPassTitle}>Показати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.regBtn}>
          <Text style={styles.regBtnTitle}>Зареєструватись</Text>
        </TouchableOpacity>
      </View>
      <Text>Вже є аккаунт? Увійти.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 32,
  },

  formInput: {
    height: 50,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    fontSize: 16,
  },

  showPass: {
    position: "absolute",
    right: 10,
    top: 15,
  },

  showPassTitle: {
    fontSize: 16,
    color: "#1B4371",
  },

  regBtn: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  regBtnTitle: {
    fontSize: 16,
    color: "#ffffff",
  },
});
