import { TextInput, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import Colors from '../../components/constants/colors';

const duration = 150;

export default function InfoInput({ placeholder, value, onChangeText, ...rest }) {
  const holder = useSharedValue(0);

  const x = placeholder === 'Position' ? 4.1 : 5;

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
          scale: interpolate(holder.value, [0, 1], [1, 0.85]),
        },
        {
          translateY: interpolate(holder.value, [0, 1], [0, -9]),
        },
        {
          translateX: interpolate(holder.value, [0, 1], [0, -x]),
        },
      ],
    };
  });

  return (
    <View className="bg-light-PBgComp dark:bg-dark-PBgComp h-[56] justify-center rounded-xl mb-[14]">
      <TextInput className="h-full pl-[16] pt-[17]" selectionColor={Colors.light.SText} value={value} onChangeText={onChangeText} onFocus={handleFocus} onBlur={handleBlur} {...rest} />
      <Animated.Text style={holderAnim} className="absolute left-[16] text-light-SText dark:text-dark-SText pointer-events-none">
        {placeholder}
      </Animated.Text>
    </View>
  );
}
