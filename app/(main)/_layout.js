import { useMemo, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import ProfileHeader from '../../components/profile/profileHeader.js';
import UserInfoForm from '../../components/profile/userInfoForm.js';
import ThemeSwitcher from '../../components/profile/themeSwitcher.js';
import ProfileSheetContent from '../../components/profile/profileSheetContent.js';
import HomeOverlayBackdrop from '../../components/profile/homeOverlayBackdrop.js';

import CustomBottomSheat from '../../components/common/CustomBottomSheat.js';

import { useSharedValue } from 'react-native-reanimated';
import { View } from 'react-native';

export default function () {
  const homeSheetRef = useRef(null);

  const [selectedSex, setSelectedSex] = useState('Sex');

  const [fullName, setFullName] = useState('');

  const [position, setPosition] = useState('');

  const progresSex = useSharedValue(0);

  const snapPoints = useMemo(() => [235], []);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false} keyboardShouldPersistTaps="handled">
      <View className="dark:bg-black flex-1">
        <ProfileHeader />

        <UserInfoForm {...{ homeSheetRef, progresSex, selectedSex, fullName, setFullName, position, setPosition }} />

        <ThemeSwitcher />

        <CustomBottomSheat ref={homeSheetRef} snapPoints={snapPoints} backdropComponent={({ animatedIndex, style }) => <HomeOverlayBackdrop {...{ animatedIndex, style, progresSex, selectedSex }} />}>
          <ProfileSheetContent {...{ homeSheetRef, progresSex, selectedSex, setSelectedSex }} />
        </CustomBottomSheat>
      </View>
    </ScrollView>
  );
}
