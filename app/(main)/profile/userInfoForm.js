import { Pressable, Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import InfoInput from './InfoInput';

const AnimButton = Animated.createAnimatedComponent(Pressable);

export default function UserInfoForm({ homeSheetRef, progresSex, selectedSex, fullName, setFullName, position, setPosition }) {
  const sexStyle = useAnimatedStyle(() => {
    return {
      borderColor: progresSex.value ? '#085F4C' : '#fff',
      borderWidth: interpolate(progresSex.value, [0, 1], [0, 1]),
    };
  });

  return (
    <View className="px-5 py-8">
      <InfoInput value={fullName} onChangeText={setFullName} placeholder="Full name" />
      <InfoInput value={position} onChangeText={setPosition} placeholder="Position" />
      <AnimButton
        style={sexStyle}
        className="bg-gray-100 h-12 rounded-xl justify-center"
        onPress={() => {
          homeSheetRef.current.show();
          progresSex.value = withTiming(1);
        }}
      >
        <Text className="text-STextColor text-sm font-medium ml-3">{selectedSex}</Text>
      </AnimButton>
    </View>
  );
}
