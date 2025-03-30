import BottomSheet, { useBottomSheet } from '@gorhom/bottom-sheet';
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolation, interpolate, runOnJS, useAnimatedStyle } from 'react-native-reanimated';

function OverlayBackdrop({ animatedIndex, style }) {
  const { close } = useBottomSheet();

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'black',
      opacity: interpolate(animatedIndex.value, [-1, 0], [0, 0.5], Extrapolation.CLAMP),
    };
  });

  const Tap = Gesture.Tap().onEnd(() => {
    runOnJS(close)();
  });

  return (
    <GestureDetector gesture={Tap}>
      <Animated.View style={[style, containerAnimatedStyle]} />
    </GestureDetector>
  );
}

const CustomBottomSheat = forwardRef(({ children, ...rest }, ref) => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => [235], []);

  useImperativeHandle(ref, () => ({
    show: () => bottomSheetModalRef.current?.expand(),
    close: () => bottomSheetModalRef.current?.close(),
  }));

  return (
    <BottomSheet backdropComponent={OverlayBackdrop} index={-1} {...rest} ref={bottomSheetModalRef} snapPoints={snapPoints} enableDynamicSizing={false} handleComponent={null}>
      {children}
    </BottomSheet>
  );
});

export default CustomBottomSheat;
