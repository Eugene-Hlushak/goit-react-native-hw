import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LogInScreen from "./Screens/LogInScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import CommentsScreen from "./Screens/CommentsScreen";
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
        <AppStack.Screen name="Registration" component={RegistrationScreen} />
        <AppStack.Screen name="Login" component={LogInScreen} />
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
