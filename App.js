import { useFonts } from "expo-font";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import RegistrationScreen from "./Screens/AuthorizationScreen/RegistrationScreen";
import LogInScreen from "./Screens/AuthorizationScreen/LogInScreen";
import PostsScreen from "./Screens/MainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/MainScreen/CreatePostsScreen";
import CommentsScreen from "./Screens/MainScreen/CommentsScreen";
import MapScreen from "./Screens/MainScreen/MapScreen";
import Home from "./Screens/TestScreen";
import "./firebase/config";

const AppStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Comfortaa-Bold": require("./img/fonts/Comfortaa/Comfortaa-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
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
            <AppStack.Screen name="MapScreen" component={MapScreen} />
          </AppStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
