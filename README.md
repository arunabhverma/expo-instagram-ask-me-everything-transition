# Instagram's "Ask Me a Question!" Card Demo

Demonstrates of Instagram's "Ask Me a Question! Card" with smooth keyboard avoiding and transitions. It showcases how to transition smoothly with the keyboard. Built using [Expo](https://expo.dev/), [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/), and [react-native-keyboard-controller](https://github.com/kirillzyusko/react-native-keyboard-controller), and blur effects from [Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/).

## Demo

Check out the "Ask Me a Question!" card in action 👇:

| iOS                                                                                                                        |
|--------------------------------------------------------------------------------------------------------------------------------|
| <video src="https://github.com/user-attachments/assets/f3d7a982-4f19-4185-8baf-c8265902cee7" /> |

## Features

- **Smooth Transitions**: React Native Keyboard Controller was instrumental in achieving buttery smooth transitions when the keyboard opens and closes.
- **Drag n Drop**: Reanimated's API provides excellent support for implementing drag and drop effects.
- **Scaling while Panning**: The card scales up when grabbed and smoothly returns to its original scale when dropped, creating a satisfying grab-and-drop effect.
- **Blurred Background**: Uses Expo's blur view to blur the background when the keyboard is open.
- **Dynamic Keyboard Interaction**: The card adjusts its position dynamically to stay perfectly centered above the keyboard.

## How It Works

- **Keyboard Interaction**: The card leverages RNKC's useReanimatedKeyboardAnimation hook to track the keyboard's height and progress. Based on this progress, the card's position is dynamically adjusted using the screen and keyboard height, ensuring it remains centered in the available space for a well-balanced layout.
  
- **Blurred Background**: When the keyboard appears, the background becomes blurred using the Expo Blur View, with its opacity smoothly transitioning from 0 to 1 via Reanimated, creating a polished UI experience. This is just a demo for keyboard transitions. The recommended and proper approach is to use react-native-portal to render the blurred background. This ensures it remains on top of all content, allowing the underlying screen content to stay accessible and unaffected.

- **Animation with Reanimated**: The card uses Reanimated for scaling and drag and drop animations, providing smooth transitions between states.

- **Keyboard Controller Integration**: Leveraging `react-native-keyboard-controller` allows for precise timing and synchronization between the keyboard's appearance and the card's animation.

## Acknowledgments

- **[Expo](https://expo.dev/)**: For simplifying cross-platform mobile development.
- **[Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: For creating fluid, hardware-accelerated animations.
- **[Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/)**: For enhancing the visual quality of the UI with native blur effects.
- **[react-native-keyboard-controller](https://github.com/kirillzyusko/react-native-keyboard-controller)**: A special shoutout to its author, [@kirillzyusko](https://github.com/kirillzyusko), for this amazing library that simplifies animations synchronized with the keyboard.

---

Feel free to fork the project and contribute by submitting a pull request (PR) for new features, bug fixes, or overall improvements!
