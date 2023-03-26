import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
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
import * as Location from "expo-location";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function CreatePostsScreen({ navigation }) {
  const [loadedPhoto, setLoadedPhoto] = useState(null);
  const [postName, setPostName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [location, setLocation] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    if (hasPermission === null) {
      async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
        console.log(hasPermission);
      };
    }
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

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
    enableBtn(text, locationName);
  };

  const locationNameInputHandler = (text) => {
    setLocationName(text);
    enableBtn(postName, text);
  };

  const onSubmit = async () => {
    console.log(`UserData:
 loadedPhoto - ${loadedPhoto}
     postName - ${postName},
     locationName - ${locationName},
     location - ${location}`);
    navigation.navigate("PostsScreen", {
      loadedPhoto,
      postName,
      locationName,
      location,
    });
  };

  const resetForm = () => {
    setLoadedPhoto(null);
    setPostName("");
    setLocationName("");
    setLocation(null);

    setIsDisabledBtn(true);
  };

  const enableBtn = (postName, locationName) => {
    if (!postName || !locationName) {
      setIsDisabledBtn(true);
    } else {
      setIsDisabledBtn(false);
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
                  <View style={[styles.photo, styles.noPhoto]}>
                    <View style={styles.roundContainer}>
                      <MaterialIcons
                        name="photo-camera"
                        size={24}
                        color="#BDBDBD"
                      />
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={addPhoto} activeOpacity={0.5}>
                <Camera
                  style={styles.photo}
                  onCameraReady={() => {}}
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
              onChangeText={locationNameInputHandler}
              placeholderTextColor={"#BDBDBD"}
            />
          </View>

          <TouchableOpacity
            disabled={isDisabledBtn}
            style={[
              styles.createPostBtn,
              isDisabledBtn ? styles.btnDisabled : styles.btnEnabled,
            ]}
            activeOpacity={0.5}
            onPress={onSubmit}
          >
            <Text
              style={[
                styles.createPostBtnTitle,
                isDisabledBtn ? styles.disabledTitle : styles.enabledTitle,
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
