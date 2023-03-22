import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LogInScreen() {
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
      <View style={styles.addPhotoBox}>
        <Image style={styles.image} />
        <Ionicons
          style={styles.addPhotoIcon}
          name="add-circle-outline"
          size={25}
          color="#FF6C00"
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          style={[styles.formInput, styles.formInputContainer]}
          placeholder="Логін"
          value={loginValue}
          onChangeText={loginInputHandler}
          placeholderTextColor={"#BDBDBD"}
        />
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
          <Text style={styles.regBtnTitle}>Зареєструватись</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.linkToLogIn}>Вже є аккаунт? Увійти.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

  addPhotoIcon: {
    top: 21,
    right: 124,
    position: "absolute",
  },

  formContainer: {
    paddingTop: 92,
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
