import { colors } from './colors';

/**
 * Design Tokens mapping primitives to semantic intent (the "why").
 */
export interface DesignTokens {
  primary: string;
  primaryHover: string;
  accent: string;
  accentHover: string;
  accentSubtle: string;
  background: string;
  backgroundAlt: string;
  surface: string;
  surfaceAlt: string;
  textPrimary: string;
  textSecondary: string;
  textOnDark: string;
  borderSubtle: string;
  navActive: string;
  gradientStart: string;
  gradientEnd: string;
}

export const NexoraTheme: DesignTokens = {
  primary: colors.forest,
  primaryHover: '#003318', // Manual dark shade for hover
  accent: colors.neon,
  accentHover: '#00cc42', // Manual dark shade for hover
  accentSubtle: 'rgba(0, 240, 75, 0.12)', // Used in gradients
  background: colors.white,
  backgroundAlt: colors.offWhite,
  surface: colors.white,
  surfaceAlt: colors.gray,
  textPrimary: colors.dark,
  textSecondary: '#4b5563', // gray-600
  textOnDark: colors.white,
  borderSubtle: '#f3f4f6', // gray-100
  navActive: colors.softGreen,
  gradientStart: colors.softGray,
  gradientEnd: colors.offWhite,
};

export const DigitalTitanTheme: DesignTokens = {
  primary: colors.midnight,
  primaryHover: '#050c1f',
  accent: colors.cyan,
  accentHover: '#00b8cc',
  accentSubtle: 'rgba(0, 229, 255, 0.12)',
  background: colors.white,
  backgroundAlt: colors.ice,
  surface: colors.white,
  surfaceAlt: '#f1f5f9', // slate-100
  textPrimary: colors.slate,
  textSecondary: '#64748b', // slate-500
  textOnDark: colors.white,
  borderSubtle: '#f1f5f9',
  navActive: colors.softCyan,
  gradientStart: '#f8fafc',
  gradientEnd: colors.white,
};

export const ObsidianTheme: DesignTokens = {
  primary: colors.obsidian,
  primaryHover: colors.black,
  accent: colors.silver,
  accentHover: '#7b8aa2',
  accentSubtle: 'rgba(148, 163, 184, 0.12)',
  background: colors.white,
  backgroundAlt: '#fafafa',
  surface: colors.white,
  surfaceAlt: colors.softSilver,
  textPrimary: colors.black,
  textSecondary: '#404040',
  textOnDark: colors.white,
  borderSubtle: '#f5f5f5',
  navActive: '#f1f5f9',
  gradientStart: '#ffffff',
  gradientEnd: '#fafafa',
};

export const ArcticIntelligenceTheme: DesignTokens = {
  primary: colors.slate900,
  primaryHover: '#0a101f',
  accent: colors.sky400,
  accentHover: '#0ea5e9',
  accentSubtle: 'rgba(56, 189, 248, 0.12)',
  background: colors.white,
  backgroundAlt: colors.ice,
  surface: colors.white,
  surfaceAlt: '#f1f5f9',
  textPrimary: colors.slate900,
  textSecondary: '#475569',
  textOnDark: colors.white,
  borderSubtle: '#f1f5f9',
  navActive: '#e0f2fe',
  gradientStart: colors.ice,
  gradientEnd: colors.white,
};

export const RoyalVioletTheme: DesignTokens = {
  primary: colors.violet950,
  primaryHover: '#1e0a45',
  accent: colors.purple500,
  accentHover: '#9333ea',
  accentSubtle: 'rgba(168, 85, 247, 0.12)',
  background: colors.white,
  backgroundAlt: colors.neutral50,
  surface: colors.white,
  surfaceAlt: '#f3f4f6',
  textPrimary: colors.gray900,
  textSecondary: '#4b5563',
  textOnDark: colors.white,
  borderSubtle: '#f3f4f6',
  navActive: '#f3e8ff',
  gradientStart: '#fafafa',
  gradientEnd: colors.white,
};

export const CarbonGoldTheme: DesignTokens = {
  primary: '#111111',
  primaryHover: '#000000',
  accent: colors.gold,
  accentHover: '#b8860b',
  accentSubtle: 'rgba(212, 175, 55, 0.12)',
  background: colors.white,
  backgroundAlt: colors.neutral50,
  surface: colors.white,
  surfaceAlt: '#f5f5f5',
  textPrimary: '#111111',
  textSecondary: '#525252',
  textOnDark: colors.white,
  borderSubtle: '#f5f5f5',
  navActive: '#fef3c7',
  gradientStart: '#ffffff',
  gradientEnd: '#fafafa',
};

export const EmeraldEnterpriseTheme: DesignTokens = {
  primary: colors.emerald900,
  primaryHover: '#06402d',
  accent: colors.emerald500,
  accentHover: '#059669',
  accentSubtle: 'rgba(16, 185, 129, 0.12)',
  background: colors.white,
  backgroundAlt: '#f9fafb',
  surface: colors.white,
  surfaceAlt: '#f3f4f6',
  textPrimary: colors.gray900,
  textSecondary: '#4b5563',
  textOnDark: colors.white,
  borderSubtle: '#f3f4f6',
  navActive: '#d1fae5',
  gradientStart: '#f9fafb',
  gradientEnd: colors.white,
};

export const GraphiteOrangeTheme: DesignTokens = {
  primary: colors.gray800,
  primaryHover: '#111827',
  accent: colors.orange500,
  accentHover: '#ea580c',
  accentSubtle: 'rgba(249, 115, 22, 0.12)',
  background: colors.white,
  backgroundAlt: colors.neutral50,
  surface: colors.white,
  surfaceAlt: '#f3f4f6',
  textPrimary: colors.gray900,
  textSecondary: '#4b5563',
  textOnDark: colors.white,
  borderSubtle: '#f3f4f6',
  navActive: '#ffedd5',
  gradientStart: '#fafafa',
  gradientEnd: colors.white,
};
