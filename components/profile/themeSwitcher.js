import { Text, View, TouchableOpacity } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';

export default function ThemeSwitcher() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-primary-light p-5 rounded-lg">
        <TouchableOpacity
          onPress={() => {
            setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
          }}
          className="mt-4 p-3 bg-blue-500 rounded"
        >
          <Text className="text-white font-bold">{colorScheme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
