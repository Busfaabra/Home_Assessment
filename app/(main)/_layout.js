import { useRef } from 'react';
import { View } from 'react-native';

import HomeHeader from './home/homeHeader.js';
import UserInfoForm from './home/userInfoForm.js';
import HomeSheetContent from './home/homeSheetContent.js';
import ThemeSwitcher from './home/themeSwitcher';
import CustomBottomSheat from '../../components/common/CustomBottomSheat.js';

export default function () {
  const homeSheetRef = useRef(null);

  return (
    <View className="flex-1 dark:bg-black">
      <HomeHeader />

      <UserInfoForm {...{ homeSheetRef }} />

      <ThemeSwitcher />

      <CustomBottomSheat ref={homeSheetRef}>
        <HomeSheetContent {...{ homeSheetRef }} />
      </CustomBottomSheat>
    </View>
  );
}
