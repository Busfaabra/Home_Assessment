import { View } from 'react-native';

export default function Divider({ withMargin = false }) {
  return <View className={`dark:bg-dark-PBgComp bg-light-PBgComp h-0.5 ${withMargin ? 'mx-5' : ''}`} />;
}
