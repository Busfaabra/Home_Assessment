import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
import useColorScheme from '../hooks/useColorScheme.js';
import _layout from './(main)/_layout';

import { dark, light } from '../tailwind/theme.js';

export default function RootLayout() {
  const { themeSelect } = useColorScheme();

  return (
    <GestureHandlerRootView style={[themeSelect({ dark, light }), { flex: 1 }]}>
      <_layout />
    </GestureHandlerRootView>
  );
}
