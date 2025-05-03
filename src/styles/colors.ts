// Color palette for the entire website
export const colors= {

  // Primary colors
  primary: {
    50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1', // Main primary color
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b',
  }

  ,

  // Secondary colors - Teal
  secondary: {
    50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6', // Main secondary color
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
  }

  ,

  // Accent colors - Amber
  accent: {
    50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b', // Main accent color
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
  }

  ,

  // Neutral colors
  neutral: {
    50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
  }

  ,

  // Background colors
  background: {
    light: '#ffffff',
      dark: '#0f172a', // Slate 950
      card: '#ffffff',
      cardDark: '#1e293b', // Slate 800
  }

  ,

  // Text colors
  text: {
    primary: '#0f172a', // Slate 900
      secondary: '#475569', // Slate 600
      light: '#f8fafc', // Slate 50
      muted: '#94a3b8', // Slate 400
  }

  ,

  // Status colors
  status: {
    success: '#10b981', // Emerald 500
      error: '#ef4444', // Red 500
      warning: '#f59e0b', // Amber 500
      info: '#3b82f6', // Blue 500
  }

  ,
}

;

// Theme object for easy access to common color combinations
export const theme= {

  // Button variants
  button: {
    primary: {
      background: colors.primary[600],
        hover: colors.primary[700],
        text: colors.text.light,
    }

    ,
    secondary: {
      background: colors.secondary[500],
        hover: colors.secondary[600],
        text: colors.text.light,
    }

    ,
    accent: {
      background: colors.accent[500],
        hover: colors.accent[600],
        text: colors.text.light,
    }

    ,
    outline: {
      border: colors.primary[500],
        text: colors.primary[500],
        hover: colors.primary[50],
    }

    ,
    ghost: {
      text: colors.primary[500],
        hover: colors.primary[50],
    }

    ,
  }

  ,

  // Card variants
  card: {
    default: {
      background: colors.background.card,
        border: colors.neutral[200],
        shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    }

    ,
    hover: {
      shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    }

    ,
  }

  ,

  // Gradient backgrounds
  gradients: {
    primary: `linear-gradient(to right, $ {
        colors.primary[600]
      }

      , $ {
        colors.primary[500]
      }

    )`,
    secondary: `linear-gradient(to right, $ {
        colors.secondary[600]
      }

      , $ {
        colors.secondary[500]
      }

    )`,
    accent: `linear-gradient(to right, $ {
        colors.accent[600]
      }

      , $ {
        colors.accent[500]
      }

    )`,
    hero: `linear-gradient(to right, $ {
        colors.primary[900]
      }

      cc, $ {
        colors.primary[800]
      }

      99)`,
  }

  ,
}

;