import { useBottomSheet } from '@gorhom/bottom-sheet';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolation, interpolate, runOnJS, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function HomeOverlayBackdrop({ animatedIndex, style, progresSex, selectedSex }) {
  const { close } = useBottomSheet();

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: '#10101180',
      opacity: interpolate(animatedIndex.value, [-1, 0], [0, 0.5], Extrapolation.CLAMP),
    };
  });

  const Tap = Gesture.Tap().onEnd(() => {
    runOnJS(close)();
    if (selectedSex === 'Sex') progresSex.value = withTiming(0);
  });

  return (
    <GestureDetector gesture={Tap}>
      <Animated.View style={[style, containerAnimatedStyle]} />
    </GestureDetector>
  );
}
