import { useMemo, useRef, useState } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';

import CustomBottomSheat from '../../components/common/customBottomSheat.js';
import KeyboardAvoidingWrapper from '../../components/common/keyboardAvoidingWrapper.js';
import OverlayBackdrop from '../../components/common/overlayBackdrop.js';
import ProfileHeader from '../../components/profile/profileHeader.js';
import ProfileSheetContent from '../../components/profile/profileSheetContent.js';
import ThemeSwitcher from '../../components/profile/themeSwitcher.js';
import UserInfoForm from '../../components/profile/userInfoForm.js';

export default function () {
  const homeSheetRef = useRef(null);

  const [selectedSex, setSelectedSex] = useState('Sex');

  const [fullName, setFullName] = useState('');

  const [position, setPosition] = useState('');

  const progresSex = useSharedValue(0);

  const snapPoints = useMemo(() => [235], []);

  function _onGesturePan() {
    if (selectedSex === 'Sex') progresSex.value = withTiming(0);
  }

  return (
    <KeyboardAvoidingWrapper>
      <ProfileHeader />

      <UserInfoForm {...{ homeSheetRef, progresSex, selectedSex, fullName, setFullName, position, setPosition }} />

      <ThemeSwitcher />

      <CustomBottomSheat ref={homeSheetRef} snapPoints={snapPoints} backdropComponent={({ animatedIndex, style }) => <OverlayBackdrop {...{ animatedIndex, style }} onGesturePan={_onGesturePan} />}>
        <ProfileSheetContent {...{ homeSheetRef, progresSex, selectedSex, setSelectedSex }} />
      </CustomBottomSheat>
    </KeyboardAvoidingWrapper>
  );
}
