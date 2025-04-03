import { View } from 'react-native';

import Divider from './divider';
import HeaderSheetContent from './headerSheetContent';
import SexOption from './sexOption';

export default function ProfileSheetContent({ homeSheetRef, progresSex, selectedSex, setSelectedSex }) {
  return (
    <View className="flex-1">
      <HeaderSheetContent onClose={() => homeSheetRef.current.close()} selectedSex={selectedSex} progresSex={progresSex} />
      <Divider />
      <SexOption sex="Male" selectedSex={selectedSex} onSelect={setSelectedSex} onClose={() => homeSheetRef.current.close()} />
      <Divider withMargin />
      <SexOption sex="Female" selectedSex={selectedSex} onSelect={setSelectedSex} onClose={() => homeSheetRef.current.close()} />
    </View>
  );
}
