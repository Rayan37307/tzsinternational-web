// Color palette for the entire website - Modern Sleek Theme
export const colors = {

  // Primary colors - Deep Indigo/Blue
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Main primary - Bright blue
    600: '#0284c7', // Deeper blue
    700: '#0369a1', // Rich blue
    800: '#075985', // Deep blue
    900: '#0c4a6e', // Very deep blue
    950: '#082f49',
  },

  // Secondary colors - Modern Emerald/Green
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // Main secondary - Emerald
    600: '#0d9488', // Deeper emerald
    700: '#0f766e', // Rich green
    800: '#115e59', // Deep green
    900: '#134e4a', // Very dark green
    950: '#042f2e',
  },

  // Tertiary/Accent colors - Modern Amber/Gold
  tertiary: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Main amber
    600: '#d97706', // Deeper amber
    700: '#b45309', // Rich orange
    800: '#92400e', // Deep orange
    900: '#78350f', // Very dark orange
    950: '#451a03',
  },

  // Modern Gray Tones
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  // Sleek Background colors
  background: {
    light: '#f8fafc',  // slate-50 - Clean, soft background
    dark: '#0f172a',   // slate-900 - Deep dark background
    card: '#ffffff',   // Pure white cards
    cardDark: '#1e293b', // slate-800 - Cards in dark mode
    muted: '#f1f5f9',  // slate-100 - Subtle muted areas
    input: '#f8fafc',  // Same as main bg for subtle inputs
  },

  // Sleek Text colors
  text: {
    primary: '#111827',    // gray-900 - Dark main text
    secondary: '#6b7280',  // gray-500 - Muted text
    light: '#f8fafc',      // slate-50 - Light text
    muted: '#9ca3af',      // gray-400 - Dimmed text
    bright: '#1f2937',     // gray-800 - Brighter text
    link: '#0284c7',       // primary-600 - Link text
  },

  // Sleek Border colors
  border: {
    main: '#d1d5db',       // gray-300 - Standard border
    light: '#e5e7eb',      // gray-200 - Light border
  },

  // Status colors with modern sleek styling
  status: {
    success: '#10b981',    // Emerald 500
    error: '#ef4444',      // Red 500
    warning: '#f59e0b',    // Amber 500
    info: '#0ea5e9',       // Primary blue 500
  },

  // Sleek gradient colors
  gradient: {
    primary: '#0ea5e9',    // primary-500
    secondary: '#14b8a6',  // secondary-500
    accent: '#f59e0b',     // tertiary-500
    modern: 'linear-gradient(135deg, #0ea5e9, #0284c7)', // Sleek blue gradient
  }
};

// Theme object for easy access to common color combinations - Modern Sleek Style
export const theme = {

  // Button variants with sleek styling
  button: {
    primary: {
      background: colors.primary[600],
      hover: colors.primary[700],
      text: colors.text.light,
      shadow: '0 4px 6px -1px rgba(2, 132, 199, 0.2), 0 2px 4px -1px rgba(2, 132, 199, 0.1)',
    },
    secondary: {
      background: colors.secondary[600],
      hover: colors.secondary[700],
      text: colors.text.light,
      shadow: '0 4px 6px -1px rgba(13, 148, 136, 0.2), 0 2px 4px -1px rgba(13, 148, 136, 0.1)',
    },
    accent: {
      background: colors.tertiary[600],
      hover: colors.tertiary[700],
      text: colors.text.light,
      shadow: '0 4px 6px -1px rgba(217, 119, 6, 0.2), 0 2px 4px -1px rgba(217, 119, 6, 0.1)',
    },
    outline: {
      border: colors.primary[500],
      text: colors.primary[500],
      hover: colors.primary[50],
      shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    },
    ghost: {
      text: colors.primary[600],
      hover: colors.primary[50],
      shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    },
  },

  // Card variants with sleek styling
  card: {
    default: {
      background: colors.background.card,
      border: colors.border.light,
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    },
    hover: {
      shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
    },
    sleek: {
      background: colors.background.card,
      border: colors.border.light,
      shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
      hover: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    },
  },

  // Gradient backgrounds with sleek styling
  gradients: {
    primary: `linear-gradient(to right, ${colors.primary[600]}, ${colors.primary[500]})`,
    secondary: `linear-gradient(to right, ${colors.secondary[600]}, ${colors.secondary[500]})`,
    accent: `linear-gradient(to right, ${colors.tertiary[600]}, ${colors.tertiary[500]})`,
    modern: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.secondary[500]})`,
    hero: `linear-gradient(135deg, ${colors.primary[900]}, ${colors.primary[800]})`,
  },

  // Sleek modern utility colors
  util: {
    glow: `0 0 15px rgba(${parseInt('0E', 16)}, ${parseInt('A5', 16)}, ${parseInt('E9', 16)}, 0.3)`, // Primary blue glow
    innerGlow: `inset 0 0 10px rgba(${parseInt('0E', 16)}, ${parseInt('A5', 16)}, ${parseInt('E9', 16)}, 0.1)`, // Primary blue inner glow
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  }
};