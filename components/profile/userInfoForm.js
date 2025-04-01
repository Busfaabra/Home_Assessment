import { View } from 'react-native';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import InfoInput from './InfoInput';
import SelectableButton from './SelectableButton';

export default function UserInfoForm({ homeSheetRef, progresSex, selectedSex, fullName, setFullName, position, setPosition }) {
  return (
    <View className="px-5 py-7">
      <InfoInput value={fullName} onChangeText={setFullName} placeholder="Full name" />
      <InfoInput value={position} onChangeText={setPosition} placeholder="Position" />
      <SelectableButton {...{ homeSheetRef, selectedSex, progresSex }} />
    </View>
  );
}
