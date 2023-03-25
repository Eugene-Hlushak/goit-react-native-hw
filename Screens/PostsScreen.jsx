import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

export default function PostsScreenEmpty({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  const { emailValue, loginValue, loadedPhoto, postName, location } =
    route.params;

  useEffect(() => {
    if (!loadedPhoto || !postName || !location) return;
    console.log(
      "Рендер після створення посту - введені дані",
      loadedPhoto,
      postName,
      location
    );
    setPosts((prev) => [...prev, { loadedPhoto, postName, location }]);
  }, [route.params]);
  console.log(posts);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.userContainer}>
        <Image style={styles.userPhoto} />
        <View>
          <Text style={styles.userName}>{loginValue || "Eugene Hlushak"}</Text>
          <Text style={styles.userEmail}>
            {emailValue || "hlushak.e@gmail.com"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen")}>
        <View style={styles.postContainer}>
          <View
            style={{
              width: "100%",
              height: 100,
              marginBottom: 8,
              backgroundColor: "gray",
              borderRadius: 20,
            }}
          ></View>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 19,
              color: "#212121",
            }}
          >
            Here is your new post with name - {postName}
          </Text>
          <View
            style={{
              height: 16,

              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <EvilIcons name="comment" size={17} color="black" />
            <Text>You was here - {location}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="grid-outline"
            size={24}
            color="rgba(33, 33, 33, 0.8)"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.activeBtn]}
          onPress={() => navigation.navigate("CreatePostsScreen")}
        >
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="person-outline"
            size={24}
            color="rgba(33, 33, 33, 0.8)"
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 22,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "55%",
    height: 60,
  },

  userPhoto: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: "cyan",
  },

  userName: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },

  btnsContainer: {
    height: 80,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 70,
    borderRadius: 20,
  },

  activeBtn: {
    backgroundColor: "#FF6C00",
  },
});
