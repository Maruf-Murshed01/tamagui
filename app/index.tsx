
import { TamaguiProvider, Text, View } from 'tamagui';
import { config } from '../tamagui.config';

export default function Index() {
  return (
    <TamaguiProvider config={config}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text color="$blue10">Edit app/index.tsx to edit this screen.</Text>
    </View>
    </TamaguiProvider>
  );
}
