import { Heart, Mail, Send, Sparkles, Star, Zap } from '@tamagui/lucide-icons';
import { Button, Card, H3, Input, ScrollView, Text, XStack, YStack } from 'tamagui';

export default function Index() {
  return (
    <ScrollView
      flex={1}
      backgroundColor="$background"
      contentContainerStyle={{ minHeight: '100%' }}
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
            <H3 color="$brand" fontSize={32}>
              no cap mail ✨
            </H3>
          </XStack>
          <Text color="$color11" fontSize={16}>
            email but make it slay 💅
          </Text>
        </YStack>

        {/* Email Compose Card */}
        <Card
          elevate
          bordered
          backgroundColor="$backgroundHover"
          borderColor="$borderColor"
          borderRadius="$xl"
          padding="$4"
          marginTop="$4"
          animation="bouncy"
          pressStyle={{ scale: 0.99 }}
        >
          <YStack space="$3">
            {/* To Field */}
            <YStack space="$1.5">
              <XStack space="$1" alignItems="center">
                <Sparkles size="$iconSm" color="$info" />
                <Text fontSize={14} color="$color11">
                  bestie's @ 
                </Text>
              </XStack>
              <Input
                placeholder="who's getting this fire email? 🔥"
                backgroundColor="$background"
                borderColor="$brand"
                borderWidth={2}
                borderRadius="$md"
                padding="$2.5"
                fontSize={16}
                placeholderTextColor="$color9"
                focusStyle={{
                  borderColor: "$brandLight",
                  scale: 1.02,
                }}
              />
            </YStack>

            {/* Subject Field */}
            <YStack space="$1.5">
              <XStack space="$1" alignItems="center">
                <Zap size="$iconSm" color="$warning" />
                <Text fontSize={16} color="$color11">
                  subject line that hits different
                </Text>
              </XStack>
              <Input
                placeholder="spill the tea in 5 words or less ☕"
                backgroundColor="$background"
                borderColor="$brand"
                borderWidth={2}
                borderRadius="$md"
                padding="$2.5"
                fontSize={16}
                placeholderTextColor="$color9"
                focusStyle={{
                  borderColor: "$brandLight",
                  scale: 1.02,
                }}
              />
            </YStack>

            {/* Message Field */}
            <YStack space="$1.5">
              <XStack space="$1" alignItems="center">
                <Heart size="$iconSm" color="$error" />
                <Text fontSize={16} color="$color11">
                  the main character energy
                </Text>
              </XStack>
              <Input
                placeholder="type your vibes here... be unhinged, be free 🦋"
                backgroundColor="$background"
                borderColor="$brand"
                borderWidth={2}
                borderRadius="$md"
                padding="$3"
                fontSize={16}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                placeholderTextColor="$color9"
                focusStyle={{
                  borderColor: "$brandLight",
                  scale: 1.02,
                }}
              />
            </YStack>

            {/* Quick Reactions */}
            <YStack space="$2">
              <Text fontSize="$3" color="$color11">
                quick reactions (very mindful, very demure)
              </Text>
              <XStack space="$2" flexWrap="wrap">
                {['💯', '✨', '🔥', '💅', '🤌', 'slay', 'fr fr', 'no cap'].map((emoji) => (
                  <Button
                    key={emoji}
                    size="$small"
                    backgroundColor="$color3"
                    borderRadius="$full"
                    borderWidth={1}
                    borderColor="$color6"
                    pressStyle={{ 
                      scale: 0.9,
                      backgroundColor: "$brand",
                      borderColor: "$brandLight"
                    }}
                    animation="bouncy"
                  >
                    <Text fontSize="$3">{emoji}</Text>
                  </Button>
                ))}
              </XStack>
            </YStack>

            {/* Send Button */}
            <XStack space="$3" marginTop="$2">
              <Button
                flex={1}
                size="$large"
                backgroundColor="$brand"
                borderRadius="$lg"
                pressStyle={{ 
                  scale: 0.95,
                  backgroundColor: "$brandDark"
                }}
                hoverStyle={{
                  backgroundColor: "$brandLight"
                }}
                animation="bouncy"
                icon={<Send size="$iconMd" />}
                shadowColor="$brand"
                shadowOffset={{ width: 0, height: 4 }}
                shadowRadius="$2"
                shadowOpacity={0.3}
              >
                <Text color="white" fontSize={20} fontWeight="bold">
                  send it
                </Text>
              </Button>

              <Button
                size="$large"
                backgroundColor="$color3"
                borderRadius="$lg"
                borderWidth={2}
                borderColor="$color6"
                pressStyle={{ 
                  scale: 0.95,
                  backgroundColor: "$color4"
                }}
                animation="bouncy"
              >
                <Star size="$iconMd" color="$warning" />
              </Button>
            </XStack>
          </YStack>
        </Card>

        {/* Footer */}
        <YStack space="$1" alignItems="center" marginTop="$4" marginBottom="$6">
          <Text fontSize="$2" color="$color9" textAlign="center">
            powered by vibes only • zero cringe guaranteed
          </Text>
          <XStack space="$1">
            <Text fontSize="$2" color="$success">●</Text>
            <Text fontSize="$2" color="$color9">
              all emails sent with good energy
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}