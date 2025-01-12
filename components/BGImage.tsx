import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const BGImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/bgImage.jpg")}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <Image
        source={require("@/assets/images/bgImageSection.png")}
        style={styles.sectionOneStyle}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  sectionOneStyle: {
    width: 240,
    height: 160,
    top: 150,
    left: 0,
    position: "absolute",
  },
});
