import { config as BaseConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

// Import the themes and tokens from the packages you installed
import { themes, tokens } from '@tamagui/themes'

// Create the configuration by extending the v4 config with themes and tokens
export const tamaguiConfig = createTamagui({
  ...BaseConfig,
  themes,
  tokens,
})

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export { tamaguiConfig as config }
