import { Pressable, Text, TextInput, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimButton = Animated.createAnimatedComponent(Pressable);

export default function UserInfoForm({ homeSheetRef, progresSex, selectedSex }) {
  const sexStyle = useAnimatedStyle(() => {
    return {
      borderColor: progresSex.value ? '#085F4C' : '#fff',
      borderWidth: interpolate(progresSex.value, [0, 1], [0, 1]),
    };
  });

  return (
    <View className="px-5 py-8">
      <View className="bg-gray-100 h-14 rounded-xl">
        <TextInput />
      </View>
      <View className="bg-gray-100 h-14 rounded-xl my-3.5">
        <TextInput />
      </View>
      <AnimButton
        style={sexStyle}
        className="bg-gray-100 h-12 rounded-xl justify-center"
        onPress={() => {
          homeSheetRef.current.show();
          progresSex.value = withTiming(1);
        }}
      >
        <Text className="text-[#03071280] text-sm font-medium ml-3">{selectedSex}</Text>
      </AnimButton>
    </View>
  );
}
