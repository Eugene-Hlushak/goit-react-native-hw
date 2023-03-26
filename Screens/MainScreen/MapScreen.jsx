import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const {
    coords: { latitude, longitude },
  } = route.params;
  console.log(latitude);
  console.log(longitude);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        <Marker
          title="I am here"
          coordinate={{
            latitude,
            longitude,
          }}
          description="Hello"
        />
      </MapView>
    </View>
    // <View style={styles.container}>
    //   <MapView
    //     style={styles.mapStyle}
    //     region={{
    //       latitude: posts.location.latitude,
    //       longitude: posts.location.longitude,
    //       latitudeDelta: 0.0922,
    //       longitudeDelta: 0.0421,
    //     }}
    //     mapType="standard"
    //     minZoomLevel={15}
    //     onMapReady={() => console.log("Map is ready")}
    //     onRegionChange={() => console.log("Region change")}
    //   >
    //     <Marker
    //       title="I am here"
    //       coordinate={{
    //         latitude: posts.location.latitude,
    //         longitude: posts.location.longitude,
    //       }}
    //       description="Hello"
    //     />
    //   </MapView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
