import { Image, Pressable, StyleSheet, Text } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Colors from '../constants/colors';

const AnimButton = Animated.createAnimatedComponent(Pressable);

export default function SelectableButton({ homeSheetRef, selectedSex, progresSex }) {
  const sexStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(progresSex.value, [1, 0], [Colors.green, Colors.white]),
      borderWidth: 1,
    };
  });
  return (
    <AnimButton
      style={sexStyle}
      className="flex-row items-center justify-between bg-primary h-[48] rounded-xl"
      onPress={() => {
        homeSheetRef.current.show();
        progresSex.value = withTiming(1);
      }}
    >
      <Text className="text-STextColor font-medium ml-[12]">{selectedSex}</Text>
      <Image className="mr-[14] h-1 w-2" source={require('../../assets/images/chevron-down.png')} />
    </AnimButton>
  );
}

const styles = StyleSheet.create({});
