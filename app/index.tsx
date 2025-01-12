import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputToolBar } from "@/components/InputToolBar";
import { BGImage } from "@/components/BGImage";
import { StatusBar } from "expo-status-bar";
import { AskMeAnythingCard } from "@/components/AskMeAnythingCard";
import { Draggable } from "@/components/Draggable";
import { BlurBG } from "@/components/BlurBG";

export default () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="light" />
      <BlurBG />
      <View style={styles.container}>
        <BGImage />
        <Draggable>
          <AskMeAnythingCard />
        </Draggable>
      </View>
      <InputToolBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "black",
  },
});
