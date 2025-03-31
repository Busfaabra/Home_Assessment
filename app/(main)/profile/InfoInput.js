import { TextInput, View } from 'react-native';

import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const duration = 150;

export default function InfoInput({ placeholder, value, onChangeText, ...rest }) {
  const holder = useSharedValue(0);

  const handleFocus = () => {
    holder.value = withTiming(1, { duration });
  };

  const handleBlur = () => {
    holder.value = withTiming(0, { duration });
  };

  const holderAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(holder.value, [0, 1], [1, 0.8]),
        },
        {
          translateY: interpolate(holder.value, [0, 1], [0, -20]),
        },
      ],
    };
  });

  return (
    <View className="bg-gray-100 h-14 rounded-xl justify-center mb-3.5">
      <TextInput className="h-full pl-4 text-sm" selectionColor="#111111" value={value} onChangeText={onChangeText} onFocus={handleFocus} onBlur={handleBlur} {...rest} />
      <Animated.Text style={holderAnim} className="absolute left-4 text-[#03071280] pointer-events-none">
        {placeholder}
      </Animated.Text>
    </View>
  );
}
