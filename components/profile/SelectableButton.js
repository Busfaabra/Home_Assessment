import { Image, Pressable, StyleSheet, Text } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimButton = Animated.createAnimatedComponent(Pressable);

export default function SelectableButton({ homeSheetRef, selectedSex, progresSex }) {
  const sexStyle = useAnimatedStyle(() => {
    return {
      borderColor: progresSex.value ? '#085F4C' : '#fff',
      borderWidth: interpolate(progresSex.value, [0, 1], [0, 1]),
    };
  });
  return (
    <AnimButton
      style={sexStyle}
      className="flex-row items-center justify-between bg-gray-100 h-[48] rounded-xl "
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
