import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export const AskMeAnythingCard = () => {
  const [activeInput, setActiveInput] = useState(false);

  const onFocus = () => {
    setActiveInput(true);
  };

  const onBlur = () => {
    setActiveInput(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("@/assets/images/profile.jpg")}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Ask me anything!</Text>
      </View>
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Type something..."
        placeholderTextColor={"#656365"}
        style={[styles.inputStyle, activeInput && { textAlign: "left" }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderRadius: 15,
    width: 300,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  textStyle: {
    color: "black",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 18,
  },
  inputStyle: {
    backgroundColor: "#E3E1E4",
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: "white",
    marginTop: -(55 / 2),
  },
});
