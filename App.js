import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/AuthorizationScreen/RegistrationScreen";
import LogInScreen from "./Screens/AuthorizationScreen/LogInScreen";
import PostsScreen from "./Screens/MainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/MainScreen/CreatePostsScreen";
import CommentsScreen from "./Screens/MainScreen/CommentsScreen";
const AppStack = createStackNavigator();

import Home from "./Screens/TestScreen";

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
        {/* <AppStack.Screen name="TestScreen" component={Home} /> */}
        <AppStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Login"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen name="PostsScreen" component={PostsScreen} />
        <AppStack.Screen name="CommentsScreen" component={CommentsScreen} />
        <AppStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
