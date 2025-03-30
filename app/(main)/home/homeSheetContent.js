import { Pressable, Text, View } from 'react-native';

export default function HomeSheetContent({ homeSheetRef }) {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between p-6 items-center">
        <Text className="text-[#030712] text-2xl font-bold">Select Sex</Text>
        <Pressable onPress={() => homeSheetRef.current.close()} className="h-10 w-10 bg-gray-100 items-center justify-center rounded-full">
          <Text className="text-xl">x</Text>
        </Pressable>
      </View>
      <View className="bg-gray-100 h-0.5 " />
      <View className="flex-row justify-between items-center p-6">
        <Text className="text-lg font-semibold text-[#030712]">Male</Text>
        <View className="h-5 w-5 rounded-full border border-gray-300" />
      </View>
      <View className="bg-gray-100 h-0.5 mx-6" />
      <View className="flex-row justify-between items-center p-6">
        <Text className="text-lg font-semibold text-[#030712]">Female</Text>
        <View className="h-5 w-5 rounded-full border border-gray-300" />
      </View>
    </View>
  );
}
