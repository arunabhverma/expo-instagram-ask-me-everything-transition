import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { PressableProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Button = (props: PressableProps) => {
  return <Pressable {...props} />;
};

export const InputToolBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle}>Send message...</Text>
      </View>
      <Button>
        <Ionicons name="heart-outline" size={24} color="white" />
      </Button>
      <Button>
        <Ionicons name="paper-plane-outline" size={24} color="white" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  textWrapper: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "rgba(255,255,255,0.4)",
  },
  textStyle: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "white",
  },
});
