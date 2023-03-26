import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Text,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export default function CreatePostsScreen({ navigation }) {
  const [loadedPhoto, setLoadedPhoto] = useState(null);
  const [postName, setPostName] = useState("");
  const [location, setLocation] = useState("");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    console.log("empty useEffect, only with dependency of loaded photo");
    console.log(loadedPhoto);
  }, [loadedPhoto]);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const addPhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setLoadedPhoto(uri);
      setIsCameraActive(false);
    }
  };

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
    navigation.navigate("PostsScreen", {
      postName,
      location,
    });
  };

  const resetForm = () => {
    setLoadedPhoto(null);
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
      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <View style={styles.addPhotoContainer}>
            {!isCameraActive ? (
              <TouchableOpacity
                onPress={() => setIsCameraActive(true)}
                activeOpacity={0.5}
              >
                {loadedPhoto ? (
                  <Image
                    source={{ uri: loadedPhoto }}
                    style={[
                      styles.photo,
                      loadedPhoto ? styles.withPhoto : noPhoto,
                    ]}
                  />
                ) : (
                  <View style={styles.photo}></View>
                )}
                <View style={styles.roundContainer}>
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={addPhoto} activeOpacity={0.5}>
                <Camera
                  style={styles.photo}
                  type={type}
                  ref={(ref) => {
                    setCameraRef(ref);
                  }}
                >
                  <View style={styles.roundContainer}>
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      color="#BDBDBD"
                    />
                  </View>
                </Camera>
              </TouchableOpacity>
            )}

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
            <Ionicons
              name="md-location-outline"
              size={24}
              style={styles.locationIcon}
              color="#BDBDBD"
            />

            <TextInput
              style={[styles.formInput, styles.formInputLocation]}
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
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 34,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
  },

  addPhotoContainer: {
    marginBottom: 32,
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
  },

  noPhoto: { backgroundColor: "#F6F6F6" },
  withPhoto: { backgroundColor: "transparent" },

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
