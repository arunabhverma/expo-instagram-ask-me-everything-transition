import React from "react";
import { Keyboard, StyleSheet, useColorScheme } from "react-native";
import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";
import { BlurTint, BlurView } from "expo-blur";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export const BlurBG = () => {
  const { progress } = useReanimatedKeyboardAnimation();
  const colorScheme = useColorScheme();

  const animatedBlurStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 1], [0, 1]),
    };
  });

  return (
    <AnimatedBlurView
      onTouchEndCapture={() => Keyboard.dismiss()}
      tint={colorScheme as BlurTint}
      intensity={100}
      style={[StyleSheet.absoluteFillObject, { zIndex: 1 }, animatedBlurStyle]}
    />
  );
};
