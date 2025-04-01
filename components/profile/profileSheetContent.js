import { Image, Pressable, Text, View } from 'react-native';
import { withTiming } from 'react-native-reanimated';

export default function ProfileSheetContent({ homeSheetRef, progresSex, selectedSex, setSelectedSex }) {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between py-[16] px-[20] items-center">
        <Text className="text-PTextColor text-2xl font-bold">Select Sex</Text>
        <Pressable
          onPress={() => {
            homeSheetRef.current.close();
            if (selectedSex === 'Sex') progresSex.value = withTiming(0);
          }}
          className="h-[40] w-[40] bg-selected items-center justify-center rounded-full"
        >
          <Image className="w-3 h-3" source={require('../../assets/images/close.png')} />
        </Pressable>
      </View>
      <View className="bg-gray-100 h-0.5 " />
      <Pressable
        onPress={() => {
          setSelectedSex('Male');
          homeSheetRef.current.close();
        }}
        className="flex-row justify-between items-center p-5"
      >
        <Text className="text-lg font-semibold text-PTextColor">Male</Text>
        <View className={`h-5 w-5 rounded-full border border-hover ${selectedSex === 'Male' && 'bg-selected'}`} />
      </Pressable>
      <View className="bg-gray-100 h-0.5 mx-5" />
      <Pressable
        onPress={() => {
          setSelectedSex('Female');
          homeSheetRef.current.close();
        }}
        className="flex-row justify-between items-center p-5"
      >
        <Text className="text-lg font-semibold text-PTextColor">Female</Text>
        <View className={`h-5 w-5 rounded-full border border-hover ${selectedSex === 'Female' && 'bg-selected'}`} />
      </Pressable>
    </View>
  );
}
