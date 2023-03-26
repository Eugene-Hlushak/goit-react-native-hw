import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

export default function PostsScreenEmpty({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  const {
    emailValue,
    loginValue,
    loadedPhoto,
    postName,
    locationName,
    location,
  } = route.params;

  useEffect(() => {
    setPosts((prev) => [
      ...prev,
      { loadedPhoto, postName, locationName, location },
    ]);
    console.log(posts);
  }, [route.params]);

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

      {posts.length > 0 && (
        <View style={styles.postListContainer}>
          <View style={styles.postItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CommentsScreen")}
            >
              <Image
                style={styles.postPhoto}
                source={{
                  uri: loadedPhoto,
                }}
              />

              <Text style={styles.postName}>{postName}</Text>
              <View style={styles.postLocation}>
                <EvilIcons name="comment" size={17} color="black" />
                <Text>{locationName}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.postItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CommentsScreen")}
            >
              <View>
                <Image
                  style={styles.postPhoto}
                  source={{
                    uri: loadedPhoto,
                  }}
                />
              </View>

              <Text style={styles.postName}>{postName}</Text>
              <View style={styles.postLocation}>
                <EvilIcons name="comment" size={17} color="black" />
                <Text>{locationName}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

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
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
  },

  userContainer: {
    marginBottom: 32,
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

  postListContainer: {
    // backgroundColor: "yellow",
  },

  postItem: {
    width: "100%",

    marginBottom: 32,
    borderRadius: 20,
  },

  postPhoto: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 20,
  },

  postName: {
    marginBottom: 8,
    fontWeight: "500",
    fontSize: 16,

    color: "#212121",
  },

  postLocation: {
    fontSize: 16,
    color: "#212121",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btnsContainer: {
    height: 80,
    marginTop: "auto",
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
