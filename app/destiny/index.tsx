import { Mail } from "@tamagui/lucide-icons";
import { useState } from "react";
import {
    Button,
    H1,
    H3,
    ScrollView,
    SizableText,
    Text,
    Theme,
    XStack,
    YStack
} from "tamagui";

export default function Index() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <Theme name={theme}>
      <ScrollView
        flex={1}
        backgroundColor="$background"
        contentContainerStyle={{ minHeight: "100%" }}
      >
        <YStack
          flex={1}
          padding="$4"
          space="$3"
          maxWidth={600}
          width="100%"
          alignSelf="center"
        >
          {/* Header with Gen Z vibes */}
          <YStack space="$2" alignItems="center" marginTop="$6">
            <XStack space="$2" alignItems="center">
              <Mail size="$iconLg" color="$brand" />
              <H3 color="$color12" fontSize={32}>
                no cap mail ✨
              </H3>
            </XStack>
            <Text color="$color11" fontSize={16}>
              email but make it slay 💅
            </Text>

            <H1>Heading 1</H1>
            <SizableText>Sizable Text</SizableText>

            <Text
              // can add theme values
              color="$white"
              fontFamily="$body"
              // or just use direct values
              fontSize={20}
              hoverStyle={{
                color: "$colorHover",
              }}
            >
              Lorem ipsum
            </Text>

            <Button size="$6">Lorem ipsum</Button>
          </YStack>
        </YStack>
      </ScrollView>
    </Theme>
  );
}
