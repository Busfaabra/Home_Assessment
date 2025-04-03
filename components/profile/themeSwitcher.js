import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, Pressable, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import useColorScheme from '../../hooks/useColorScheme';

const T_WIDTH = 100;
const PADDING = 2.8;
const MARGIN_LEFT = 8;
const C_WIDTH = 34;

const LEFTOVER_SPACE = T_WIDTH - (C_WIDTH + MARGIN_LEFT + PADDING);
const TRANSLATE_X = LEFTOVER_SPACE - (MARGIN_LEFT + PADDING);

function Icon({ name = 'busfaabra', size = 20, className }) {
  return (
    <View className={className}>
      <MaterialIcons name={name} size={size} color="white" />
    </View>
  );
}

export default function ThemeSwitcher() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const progressToggle = useSharedValue(0);

  const animToggle = useAnimatedStyle(() => {
    return {
      width: C_WIDTH,
      height: C_WIDTH,
      marginLeft: MARGIN_LEFT,
      transform: [
        {
          translateX: interpolate(progressToggle.value, [0, 1], [0, TRANSLATE_X]),
        },
      ],
    };
  });

  function onToggle() {
    progressToggle.value = withTiming(!progressToggle.value);
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Pressable onPress={onToggle} style={styles.press} className="mt-36 bg-black dark:bg-slate-800 rounded-full">
      <View className="bg-gray-700 rounded-full justify-center w-full h-full">
        <View style={{ borderWidth: 2 }} className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 border-gray-500 rounded-full" />
        <Icon className="absolute left-2.5" name="dark-mode" size={30} />
        <Icon className="absolute right-3 " name="light-mode" size={26} />
        <Animated.View style={animToggle} className="bg-gray-500 rounded-full " />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: T_WIDTH,
    height: 54,
    padding: PADDING,
    alignSelf: 'center',
  },
});
