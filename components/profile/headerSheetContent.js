import { Image, Pressable, Text, View } from 'react-native';
import { withTiming } from 'react-native-reanimated';

export default function HeaderSheetContent({ onClose, selectedSex, progresSex }) {
  return (
    <View className="flex-row justify-between py-[16] px-[20] items-center">
      <Text className="text-light-PText text-2xl font-bold">Select Sex</Text>
      <Pressable
        onPress={() => {
          onClose();
          if (selectedSex === 'Sex') progresSex.value = withTiming(0);
        }}
        className="h-[40] w-[40] bg-light-PBgComp items-center justify-center rounded-full"
      >
        <Image className="w-3 h-3" source={require('../../assets/images/close.png')} />
      </Pressable>
    </View>
  );
}
