import { config as BaseConfig } from '@tamagui/config/v4'
import { tokens as defaultTokens, themes } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

// Create custom tokens with consistent scales
const customTokens = createTokens({
  // Custom spacing scale (follows 4px base unit)
  space: {
    ...defaultTokens.space,
    // Add custom space values - keys with dots must be quoted
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
    // Button/Input sizes
    $small: 32,
    $medium: 40,
    $large: 48,
    // Icon sizes
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
  
  // Custom z-index scale - must use numeric tokens
  zIndex: {
    ...defaultTokens.zIndex,
    '$0': 0,      // base
    '$1': 100,    // dropdown
    '$2': 200,    // sticky
    '$3': 300,    // modal
    '$4': 400,    // popover
    '$5': 500,    // tooltip
  },
  
  // Custom color additions
  color: {
    ...defaultTokens.color,
    // Brand colors
    $brand: '#2E8B57',
    $brandLight: '#3BA968',
    $brandDark: '#236B42',
    // Semantic colors
    $success: '#22C55E',
    $warning: '#F59E0B',
    $error: '#EF4444',
    $info: '#3B82F6',
  },
  
  // Add fontSize tokens
  fontSize: {
    ...defaultTokens.fontSize,
    $1: 12,
    $2: 14,
    $3: 16,
    $4: 18,
    $5: 20,
    $6: 24,
    $7: 28,
    $8: 32,
    $9: 36,
    $10: 40,
  },
})

// Merge tokens and create config
export const tamaguiConfig = createTamagui({
  ...BaseConfig,
  themes,
  tokens: customTokens,
})

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export { tamaguiConfig as config }
