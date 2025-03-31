import { useMemo, useRef, useState } from 'react';
import { ScrollView } from 'react-native';

import ProfileHeader from './profile/profileHeader';
import UserInfoForm from './profile/userInfoForm';
import ProfileSheetContent from './profile/profileSheetContent';
import ThemeSwitcher from './profile/themeSwitcher';
import HomeOverlayBackdrop from './profile/homeOverlayBackdrop';

import CustomBottomSheat from '../../components/common/CustomBottomSheat.js';

import { useSharedValue } from 'react-native-reanimated';

export default function () {
  const homeSheetRef = useRef(null);

  const [selectedSex, setSelectedSex] = useState('Sex');

  const [fullName, setFullName] = useState('');

  const [position, setPosition] = useState('');

  const progresSex = useSharedValue(0);

  const snapPoints = useMemo(() => [235], []);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} className="dark:bg-black" scrollEnabled={false} keyboardShouldPersistTaps="handled">
      <ProfileHeader />

      <UserInfoForm {...{ homeSheetRef, progresSex, selectedSex, fullName, setFullName, position, setPosition }} />

      <ThemeSwitcher />

      <CustomBottomSheat ref={homeSheetRef} snapPoints={snapPoints} backdropComponent={({ animatedIndex, style }) => <HomeOverlayBackdrop {...{ animatedIndex, style, progresSex, selectedSex }} />}>
        <ProfileSheetContent {...{ homeSheetRef, progresSex, selectedSex, setSelectedSex }} />
      </CustomBottomSheat>
    </ScrollView>
  );
}
