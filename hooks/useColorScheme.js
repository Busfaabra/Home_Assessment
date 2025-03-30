import { useColorScheme as tw_useColorScheme } from 'nativewind';

export default function useColorScheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } = tw_useColorScheme();
  const Dark = colorScheme === 'dark';
;
  console.log('colorScheme', colorScheme);

  const themeSelect = (themeSelect) => {
    if (Dark) return themeSelect.dark;
    return themeSelect.light;
  };

  return {
    themeSelect,
    colorScheme,
    setColorScheme,
    toggleColorScheme,
  };
}
