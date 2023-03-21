import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function RegistrationScreen() {
  const [loginValue, setLoginValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [paswordValue, setPaswordValue] = useState("");

  const loginInputHandler = (text) => {
    setLoginValue(text);
  };

  const emailInputHandler = (text) => {
    setEmailValue(text);
  };

  const passwordInputHandler = (text) => {
    setPaswordValue(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Логін"
        value={loginValue}
        onChangeText={loginInputHandler}
      />
      <TextInput
        placeholder="Електронна пошта"
        value={emailValue}
        onChangeText={emailInputHandler}
      />
      <TextInput
        placeholder="Пароль"
        value={paswordValue}
        onChangeText={passwordInputHandler}
      />
      <Button title="Зареєструватися" />
    </View>
  );
}
