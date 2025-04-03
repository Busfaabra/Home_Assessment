import { Pressable, Text, View } from 'react-native';

export default function SexOption({ sex, selectedSex, onSelect, onClose }) {
  return (
    <Pressable
      onPress={() => {
        onSelect(sex);
        onClose();
      }}
      className="flex-row justify-between items-center p-5">
      <Text className="text-lg font-semibold text-light-PText">{sex}</Text>
      <View className={`h-5 w-5 rounded-full border border-light-hover ${selectedSex === sex && 'bg-light-PBgComp'}`} />
    </Pressable>
  );
}
