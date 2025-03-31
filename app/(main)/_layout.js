import { useMemo, useRef, useState } from 'react';
import { View } from 'react-native';

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

  const progresSex = useSharedValue(0);

  const snapPoints = useMemo(() => [235], []);

  return (
    <View className="flex-1 dark:bg-black">
      <ProfileHeader />

      <UserInfoForm {...{ homeSheetRef, progresSex, selectedSex }} />

      <ThemeSwitcher />

      <CustomBottomSheat ref={homeSheetRef} snapPoints={snapPoints} backdropComponent={({ animatedIndex, style }) => <HomeOverlayBackdrop {...{ animatedIndex, style, progresSex, selectedSex }} />}>
        <ProfileSheetContent {...{ homeSheetRef, progresSex, selectedSex, setSelectedSex }} />
      </CustomBottomSheat>
    </View>
  );
}
