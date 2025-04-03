import { useBottomSheet } from '@gorhom/bottom-sheet';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolation, interpolate, runOnJS, useAnimatedStyle } from 'react-native-reanimated';

export default function OverlayBackdrop({ onGesturePan, animatedIndex, style }) {
  const { close } = useBottomSheet();

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: '#10101180',
      opacity: interpolate(animatedIndex.value, [-1, 0], [0, 0.5], Extrapolation.CLAMP),
    };
  });

  const Tap = Gesture.Tap().onEnd(() => {
    runOnJS(close)();
    onGesturePan && runOnJS(onGesturePan)();
  });

  return (
    <GestureDetector gesture={Tap}>
      <Animated.View style={[style, containerAnimatedStyle]} />
    </GestureDetector>
  );
}
