import { 
  NexoraTheme, 
  DigitalTitanTheme, 
  ObsidianTheme,
  ArcticIntelligenceTheme,
  RoyalVioletTheme,
  CarbonGoldTheme,
  EmeraldEnterpriseTheme,
  GraphiteOrangeTheme
} from './themes';

/**
 * THE SOURCE OF TRUTH
 * Switch the value of ACTIVE_THEME_NAME to change the entire site.
 */
export const ACTIVE_THEME_NAME = 'GraphiteOrange'; // Change this to the desired theme name

const THEMES = {
  Nexora: NexoraTheme,
  DigitalTitan: DigitalTitanTheme,
  Obsidian: ObsidianTheme,
  ArcticIntelligence: ArcticIntelligenceTheme,
  RoyalViolet: RoyalVioletTheme,
  CarbonGold: CarbonGoldTheme,
  EmeraldEnterprise: EmeraldEnterpriseTheme,
  GraphiteOrange: GraphiteOrangeTheme,
};

export const activeTheme = THEMES[ACTIVE_THEME_NAME as keyof typeof THEMES];

/**
 * Utility to inject theme variables into the document root.
 */
export const injectTheme = () => {
  const root = document.documentElement;
  Object.entries(activeTheme).forEach(([key, value]) => {
    // Convert camelCase to kebab-case for CSS variables
    const cssKey = `--theme-${key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`;
    root.style.setProperty(cssKey, value);
  });
};
