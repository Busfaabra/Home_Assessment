import { Image, Pressable, Text } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../constants/colors';

const AnimButton = Animated.createAnimatedComponent(Pressable);

export default function SelectableButton({ homeSheetRef, selectedSex, progresSex }) {
  const { colorScheme } = useColorScheme();

  const sexStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(progresSex.value, [1, 0], colorScheme === 'dark' ? [Colors.dark.primary, Colors.light.PText] : [Colors.light.primary, Colors.dark.PText]),
      borderWidth: 1,
    };
  });
  return (
    <AnimButton
      style={sexStyle}
      className="flex-row items-center justify-between bg-light-PBgComp dark:bg-dark-PBgComp h-[48] rounded-xl"
      onPress={() => {
        homeSheetRef.current.show();
        progresSex.value = withTiming(1);
      }}>
      <Text className="text-light-SText dark:text-dark-SText font-medium ml-[12]">{selectedSex}</Text>
      <Image className="mr-[14] h-1 w-2" source={require('../../assets/images/chevron-down.png')} />
    </AnimButton>
  );
}
