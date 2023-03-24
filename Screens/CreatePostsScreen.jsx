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
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { useState } from "react";

export default function CreatePostsScreen() {
  const [postName, setPostName] = useState("");
  const [location, setLocation] = useState("");
  const [isActiveBtn, setIsActiveBtn] = useState(true);

  const postNameInputHandler = (text) => {
    setPostName(text);
    enableBtn(text, location);
  };

  const locationInputHandler = (text) => {
    setLocation(text);
    enableBtn(postName, text);
  };

  const onSubmit = () => {
    console.log(`UserData:
     postName - ${postName},
     location - ${location}`);
    resetForm();
  };

  const resetForm = () => {
    setPostName("");
    setLocation("");
    setIsActiveBtn(true);
  };

  const enableBtn = (postName, location) => {
    if (!postName || !location) {
      setIsActiveBtn(true);
    } else {
      setIsActiveBtn(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.addPhotoContainer}>
            <TouchableOpacity
              onPress={() => Alert.alert("You can add photo")}
              activeOpacity={0.5}
            >
              <View style={styles.photo}>
                <View style={styles.roundContainer}>
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.tipp}>Завантажте фото</Text>
          </View>

          <TextInput
            style={[styles.formInput, styles.formInputPostName]}
            placeholder="Назва..."
            inputMode="text"
            value={postName}
            onChangeText={postNameInputHandler}
            placeholderTextColor={"#BDBDBD"}
          />
          <View style={styles.formInputLocationContainer}>
            {!location && (
              <Ionicons
                name="md-location-outline"
                size={24}
                style={styles.locationIcon}
                color="#BDBDBD"
              />
            )}
            <TextInput
              style={[styles.formInput, !location && styles.formInputLocation]}
              placeholder="Місцевість..."
              value={location}
              onChangeText={locationInputHandler}
              placeholderTextColor={"#BDBDBD"}
            />
          </View>

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

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={resetForm}
          style={styles.deletePost}
        >
          <FontAwesome5 name="trash-alt" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 34,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
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
    height: 51,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  formInputPostName: {
    marginBottom: 16,
  },

  formInputLocationContainer: {
    marginBottom: 32,
  },

  formInputLocation: {
    position: "relative",
    paddingLeft: 28,
  },

  locationIcon: {
    top: 15,
    left: 0,
    position: "absolute",
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

  deletePost: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
