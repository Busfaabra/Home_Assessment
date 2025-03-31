import { Pressable, Text, View } from 'react-native';
import { withTiming } from 'react-native-reanimated';

export default function ProfileSheetContent({ homeSheetRef, progresSex, selectedSex, setSelectedSex }) {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between p-6 items-center">
        <Text className="text-[#030712] text-2xl font-bold">Select Sex</Text>
        <Pressable
          onPress={() => {
            homeSheetRef.current.close();
            if (selectedSex === 'Sex') progresSex.value = withTiming(0);
          }}
          className="h-10 w-10 bg-gray-100 items-center justify-center rounded-full"
        >
          <Text className="text-xl">x</Text>
        </Pressable>
      </View>
      <View className="bg-gray-100 h-0.5 " />
      <Pressable
        onPress={() => {
          setSelectedSex('Male');
          homeSheetRef.current.close();
        }}
        className="flex-row justify-between items-center p-6"
      >
        <Text className="text-lg font-semibold text-[#030712]">Male</Text>
        <View className="h-5 w-5 rounded-full border border-gray-300" />
      </Pressable>
      <View className="bg-gray-100 h-0.5 mx-6" />
      <Pressable
        onPress={() => {
          setSelectedSex('Female');
          homeSheetRef.current.close();
        }}
        className="flex-row justify-between items-center p-6"
      >
        <Text className="text-lg font-semibold text-[#030712]">Female</Text>
        <View className="h-5 w-5 rounded-full border border-gray-300" />
      </Pressable>
    </View>
  );
}
