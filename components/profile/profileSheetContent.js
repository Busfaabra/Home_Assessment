import { View } from 'react-native';
import Header from './Header';
import SexOption from './SexOption';
import Divider from './Divider';

export default function ProfileSheetContent({ homeSheetRef, progresSex, selectedSex, setSelectedSex }) {
  return (
    <View className="flex-1">
      <Header onClose={() => homeSheetRef.current.close()} selectedSex={selectedSex} progresSex={progresSex} />
      <Divider />
      <SexOption sex="Male" selectedSex={selectedSex} onSelect={setSelectedSex} onClose={() => homeSheetRef.current.close()} />
      <Divider withMargin />
      <SexOption sex="Female" selectedSex={selectedSex} onSelect={setSelectedSex} onClose={() => homeSheetRef.current.close()} />
    </View>
  );
}
