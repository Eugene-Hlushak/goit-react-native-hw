import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function CreatePostsScreen() {
  const [postName, setPostName] = useState("");
  const [place, setPlace] = useState("");
  const [isActiveBtn, setIsActiveBtn] = useState(true);

  const postNameInputHandler = (text) => {
    setPostName(text);
    enableBtn(text, place);
  };

  const placeInputHandler = (text) => {
    setPlace(text);
    enableBtn(postName, text);
  };

  const onSubmit = () => {
    console.log(`UserData:
     postName - ${postName},
     place - ${place}`);
    resetForm();
  };

  const resetForm = () => {
    setPostName("");
    setPlace("");
    setIsActiveBtn(true);
  };

  const enableBtn = (postName, place) => {
    if (!postName || !place) {
      setIsActiveBtn(true);
    } else {
      setIsActiveBtn(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addPhotoContainer}>
        <TouchableOpacity
          onPress={() => Alert.alert("You can add photo")}
          activeOpacity={0.5}
        >
          <View style={styles.photo}>
            <View style={styles.roundContainer}>
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.tipp}>Завантажте фото</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.formInput]}
          placeholder="Назва"
          inputMode="text"
          value={postName}
          onChangeText={postNameInputHandler}
          placeholderTextColor={"#BDBDBD"}
        />

        <TextInput
          style={styles.formInput}
          placeholder="Місце"
          value={place}
          onChangeText={placeInputHandler}
          placeholderTextColor={"#BDBDBD"}
        />

        <TouchableOpacity
          disabled={isActiveBtn}
          style={[
            styles.createPostBtn,
            isActiveBtn ? styles.btnDisabled : styles.btnEnabled,
          ]}
          activeOpacity={0.5}
          onPress={onSubmit}
        >
          <Text
            style={[
              styles.createPostBtnTitle,
              isActiveBtn ? styles.disabledTitle : styles.enabledTitle,
            ]}
          >
            Створити публікацію
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "green",
    alignItems: "center",
  },

  addPhotoContainer: {
    paddingBottom: 32,
  },

  photo: {
    width: 340,
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

  tipp: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  formContainer: {
    width: 340,
  },

  formInput: {
    height: 50,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  createPostBtn: {
    height: 51,
    marginBottom: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  btnDisabled: {
    backgroundColor: "#F6F6F6",
  },

  btnEnabled: {
    backgroundColor: "#FF6C00",
  },

  // createPostBtnTitleDisabled: {
  //   fontFamily: "Comfortaa-Bold",
  //   textAlign: "center",
  //
  //   fontSize: 16,
  // },

  createPostBtnTitle: {
    fontFamily: "Comfortaa-Bold",
    textAlign: "center",

    fontSize: 16,
  },

  disabledTitle: {
    color: "#BDBDBD",
  },

  enabledTitle: {
    color: "#FFFFFF",
  },
});
