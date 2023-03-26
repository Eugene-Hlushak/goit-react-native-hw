import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
// import { nanoid } from "nanoid";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const CommentsListItem = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.commentContainer}>
      <Image style={styles.userImageBox} />
      <View
        style={[
          styles.commentTextContainer,
          // ? styles.commentTextContainerOdd
          // : styles.commentTextContainerEven,
        ]}
      >
        <Text style={{ textAlign: "left" }}>{item.comment}</Text>
        <Text style={{ textAlign: "right" }}>date</Text>
      </View>
    </View>
  );
};

export default function PostsScreenEmpty({ navigation, route }) {
  const { loadedPhoto } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    console.log(comment);
    console.log(allComments);
  }, [allComments]);

  const commentInputHandler = (text) => setComment(text);

  const sendComment = () => {
    if (!comment) return;
    setAllComments((prev) => [...prev, { comment }]);
    setComment("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
        <View style={styles.photoContainer}>
          <Image source={{ uri: loadedPhoto }} style={styles.photo} />

          {/* <View style={styles.roundContainer}>
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </View> */}
        </View>

        <View style={styles.commentsList}>
          {allComments.length > 0 && (
            <FlatList
              data={allComments}
              renderItem={CommentsListItem}
              //   keyExtractor={() => nanoid()}
            ></FlatList>
          )}
        </View>

        <View style={styles.createCommentContainer}>
          <TextInput
            style={styles.commentInput}
            inputMode="text"
            value={comment}
            placeholder={"Коментувати..."}
            placeholderTextColor="#BDBDBD"
            onChangeText={commentInputHandler}
          />
          <TouchableOpacity style={styles.button} onPress={sendComment}>
            <AntDesign name="arrowup" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
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

  photoContainer: {
    marginBottom: 32,
  },

  photo: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },

  roundContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },

  commentsList: {
    height: 323,
    marginBottom: 31,
  },

  commentInput: {
    height: 51,
    width: "100%",
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },

  button: {
    position: "absolute",
    top: 9,
    right: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 34,
    width: 34,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },

  commentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    // backgroundColor: "rgba(0, 0, 0, 0.03)",
  },

  userImageBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    backgroundColor: "yellow",
  },

  commentTextContainer: {
    width: 300,
    padding: 16,
    // backgroundColor: "tomato",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },

  commentTextContainerEven: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  commentTextContainerOdd: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});
