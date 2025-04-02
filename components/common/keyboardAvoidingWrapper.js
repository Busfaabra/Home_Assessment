import { ScrollView, View } from 'react-native';

export default function KeyboardAvoidingWrapper({ children }) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false} keyboardShouldPersistTaps="handled">
      <View className="dark:bg-black flex-1">{children}</View>
    </ScrollView>
  );
}
