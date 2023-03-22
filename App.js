import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LogInScreen from "./Screens/LogInScreen";
import * as Font from "expo-font";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          source={require("./imgs/Photo-BG.png")}
          style={styles.image}
        >
          {/* <LogInScreen /> */}
          <RegistrationScreen />
        </ImageBackground>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
