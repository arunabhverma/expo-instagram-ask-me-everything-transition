import React from "react";
import {
  LayoutChangeEvent,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Draggable = ({ children }: { children: React.ReactNode }) => {
  const { progress, height } = useReanimatedKeyboardAnimation();
  const offsetX = useSharedValue(130);
  const offsetY = useSharedValue(600);
  const scale = useSharedValue(0.75);
  const isDraggable = useSharedValue(false);
  const { top } = useSafeAreaInsets();

  const CardWidth = useSharedValue(0);
  const CardHeight = useSharedValue(0);

  const { width: ScreenWidth, height: ScreenHeight } = useWindowDimensions();
  const heightAfterNotch = ScreenHeight - top;

  const containerAnimatedStyle = useAnimatedStyle(() => {
    const interpolatedScale = interpolate(
      progress.value,
      [0, 1],
      [scale.value, 1]
    );
    const interpolatedTranslateX = interpolate(
      progress.value,
      [0, 1],
      [offsetX.value, (ScreenWidth - CardWidth.value) / 2]
    );
    const interpolatedTranslateY = interpolate(
      progress.value,
      [0, 1],
      [
        offsetY.value,
        (heightAfterNotch - Math.abs(height.value) - CardHeight.value + 25) / 2,
      ]
    );
    return {
      transform: [
        { translateX: interpolatedTranslateX },
        { translateY: interpolatedTranslateY },
        {
          scale: interpolatedScale,
        },
      ],
    };
  });

  const longPress = Gesture.LongPress().onStart(() => {
    isDraggable.set(true);
    scale.value = withTiming(0.8, { duration: 100 });
  });

  const onLayout = (e: LayoutChangeEvent) => {
    if (CardHeight.value === 0 && CardHeight.value === 0) {
      const { width, height } = e.nativeEvent.layout;
      CardWidth.set(width);
      CardHeight.set(height);
    }
  };

  const pan = Gesture.Pan()
    .onBegin(() => {})
    .onChange((e) => {
      if (isDraggable.value && height.value === 0) {
        offsetX.value += e.changeX;
        offsetY.value += e.changeY;
      }
    })
    .onFinalize(() => {
      isDraggable.set(false);
      scale.value = withTiming(0.75, { duration: 100 });
    });

  const compose = Gesture.Simultaneous(pan, longPress);

  return (
    <GestureHandlerRootView style={{ position: "absolute" }}>
      <GestureDetector gesture={compose}>
        <Animated.View
          style={[styles.container, containerAnimatedStyle]}
          onLayout={onLayout}
        >
          {children}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
  },
});
