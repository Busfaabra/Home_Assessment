import { View } from 'react-native';

export default function Divider({ withMargin = false }) {
  return <View className={`bg-gray-100 h-0.5 ${withMargin ? 'mx-5' : ''}`} />;
}
