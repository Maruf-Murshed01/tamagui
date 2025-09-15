import { blue, blueDark, gray, grayDark, green, greenDark, orange, orangeDark, red, redDark } from '@tamagui/colors'
import { config as BaseConfig } from '@tamagui/config/v4'
import { themes as defaultThemes, tokens as defaultTokens } from '@tamagui/themes'
import { createTamagui, createTheme, createTokens } from 'tamagui'

// Create custom tokens with consistent scales
const customTokens = createTokens({
  ...defaultTokens,
  // Custom spacing scale (follows 4px base unit)
  space: {
    ...defaultTokens.space,
    '$0.25': 2,
    '$0.5': 4,
    '$1': 8,
    '$1.5': 12,
    '$2': 16,
    '$2.5': 20,
    '$3': 24,
    '$4': 32,
    '$5': 40,
    '$6': 48,
    '$8': 64,
    '$10': 80,
  },
  
  // Custom size tokens for components
  size: {
    ...defaultTokens.size,
    $small: 32,
    $medium: 40,
    $large: 48,
    $iconSm: 16,
    $iconMd: 24,
    $iconLg: 32,
  },
  
  // Custom radius tokens
  radius: {
    ...defaultTokens.radius,
    $none: 0,
    $sm: 4,
    $md: 8,
    $lg: 12,
    $xl: 16,
    $2xl: 24,
    $full: 1000,
  },
  
  // Custom z-index scale
  zIndex: {
    ...defaultTokens.zIndex,
    '$0': 0,
    '$1': 100,
    '$2': 200,
    '$3': 300,
    '$4': 400,
    '$5': 500,
  },
})

// Create light theme
const light = createTheme({
  background: gray.gray1,
  backgroundHover: gray.gray3,
  backgroundPress: gray.gray4,
  backgroundFocus: gray.gray5,
  borderColor: gray.gray6,
  color: gray.gray12,
  
  // Semantic colors
  color1: gray.gray1,
  color2: gray.gray2,
  color3: gray.gray3,
  color4: gray.gray4,
  color5: gray.gray5,
  color6: gray.gray6,
  color7: gray.gray7,
  color8: gray.gray8,
  color9: gray.gray9,
  color10: gray.gray10,
  color11: gray.gray11,
  color12: gray.gray12,
  
  // Brand colors
  brand: green.green9,
  brandLight: green.green8,
  brandDark: green.green10,
  
  // Semantic colors
  success: green.green9,
  warning: orange.orange9,
  error: red.red9,
  info: blue.blue9,
})

// Create dark theme
const dark = createTheme({
  background: grayDark.gray1,
  backgroundHover: grayDark.gray3,
  backgroundPress: grayDark.gray4,
  backgroundFocus: grayDark.gray5,
  borderColor: grayDark.gray6,
  color: grayDark.gray12,
  
  // Semantic colors
  color1: grayDark.gray1,
  color2: grayDark.gray2,
  color3: grayDark.gray3,
  color4: grayDark.gray4,
  color5: grayDark.gray5,
  color6: grayDark.gray6,
  color7: grayDark.gray7,
  color8: grayDark.gray8,
  color9: grayDark.gray9,
  color10: grayDark.gray10,
  color11: grayDark.gray11,
  color12: grayDark.gray12,
  
  // Brand colors
  brand: greenDark.green9,
  brandLight: greenDark.green8,
  brandDark: greenDark.green10,
  
  // Semantic colors
  success: greenDark.green9,
  warning: orangeDark.orange9,
  error: redDark.red9,
  info: blueDark.blue9,
})

// Merge tokens and create config
export const tamaguiConfig = createTamagui({
  ...BaseConfig,
  themes: {
    light,
    dark,
    ...defaultThemes,
  },
  tokens: customTokens,
})

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export { tamaguiConfig as config }
