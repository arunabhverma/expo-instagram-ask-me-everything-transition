
https://github.com/user-attachments/assets/c40149ca-e800-4341-b808-93ae871e0810
# Instagram Ask Me Anything Card

Demonstrates of Instagram's "Ask Me Anything Card" with smooth transitions and animations. It showcases how to position the card dynamically above the keyboard. Built using [Expo](https://expo.dev/), [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/), and [react-native-keyboard-controller](https://github.com/kirillzyusko/react-native-keyboard-controller), and blur effects from [Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/).

## Demo

Check out the "Ask Me Anything" card in action 👇:

| iOS                                                                                                                        |
|--------------------------------------------------------------------------------------------------------------------------------|
| <video src="https://github.com/user-attachments/assets/f3d7a982-4f19-4185-8baf-c8265902cee7" /> |

## Features

- **Dynamic Keyboard Interaction**: The card adjusts its position dynamically to stay perfectly centered above the keyboard.
- **Blurred Background**: Uses Expo's blur view to blur the background when the keyboard is open.
- **Smooth Transitions**: React Native Keyboard Controller was instrumental in achieving buttery smooth transitions when the keyboard opens and closes.
- **Drag n Drop**: Reanimated's API provides excellent support for implementing drag and drop effects.
- **Scaling while Panning**: The card scales up when grabbed and smoothly returns to its original scale when dropped, creating a satisfying grab-and-drop effect.

## How It Works

- **Keyboard Interaction**: The card's position is calculated dynamically using the screen height, keyboard height, and a fixed gap. The card is centered in the remaining space, providing a balanced layout.
  
- **Blurred Background**: When the keyboard appears, the background becomes blurred using the Expo Blur View, creating a cohesive and polished UI experience.

- **Animation with Reanimated**: The card uses Reanimated for scaling and drag and drop animations, providing smooth transitions between states.

- **Keyboard Controller Integration**: Leveraging `react-native-keyboard-controller` allows for precise timing and synchronization between the keyboard's appearance and the card's animation.

## Acknowledgments

- **[Expo](https://expo.dev/)**: For simplifying cross-platform mobile development.
- **[Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: For creating fluid, hardware-accelerated animations.
- **[Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/)**: For enhancing the visual quality of the UI with native blur effects.
- **[react-native-keyboard-controller](https://github.com/kirillzyusko/react-native-keyboard-controller)**: A special shoutout to its author, [@kirillzyusko](https://github.com/Ramotion), for this amazing library that simplifies animations synchronized with the keyboard.

---

Feel free to fork the project and contribute by submitting a pull request (PR) for new features, bug fixes, or overall improvements!
