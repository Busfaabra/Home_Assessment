import { Pressable, TextInput, View } from 'react-native';

export default function UserInfoForm({ homeSheetRef }) {
  return (
    <View className="px-5 py-8">
      <View className="bg-gray-100 h-14 rounded-xl">
        <TextInput />
      </View>
      <View className="bg-gray-100 h-14 rounded-xl my-3.5">
        <TextInput />
      </View>
      <Pressable onPress={() => homeSheetRef.current.show()} className="bg-gray-100 h-12 rounded-xl" />
    </View>
  );
}
