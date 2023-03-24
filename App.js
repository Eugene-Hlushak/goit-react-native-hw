import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LogInScreen from "./Screens/LogInScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";

const AppStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Comfortaa-Bold": require("./img/fonts/Comfortaa/Comfortaa-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {/* <AppStack.Screen name="Registration" component={RegistrationScreen} />
        <AppStack.Screen name="Login" component={LogInScreen} /> */}
        <AppStack.Screen name="Create Post" component={CreatePostsScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
