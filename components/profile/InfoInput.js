import { TextInput, View } from 'react-native';

import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Colors from '../../components/constants/colors';

const duration = 150;

export default function InfoInput({ placeholder, value, onChangeText, ...rest }) {
  const holder = useSharedValue(0);

  const handleFocus = () => {
    holder.value = withTiming(1, { duration });
  };

  const handleBlur = () => {
    if (!value.length) holder.value = withTiming(0, { duration });
  };

  const holderAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(holder.value, [0, 1], [1, 0.83]),
        },
        {
          translateY: interpolate(holder.value, [0, 1], [0, -10]),
        },
        {
          translateX: interpolate(holder.value, [0, 1], [0, -6]),
        },
      ],
    };
  });

  return (
    <View className="bg-primary h-[56] justify-center rounded-xl mb-[14]">
      <TextInput className="h-full pl-[16] pt-[16]" selectionColor={Colors.STextColor} value={value} onChangeText={onChangeText} onFocus={handleFocus} onBlur={handleBlur} {...rest} />
      <Animated.Text style={holderAnim} className="absolute left-[16] text-STextColor pointer-events-none">
        {placeholder}
      </Animated.Text>
    </View>
  );
}
