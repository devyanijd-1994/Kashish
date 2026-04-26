// Theme Configuration for Consistent Styling
export const theme = {
  // Colors
  colors: {
    primary: {
      navy: '#1e3a8a',
      navyLight: '#1e40af',
      navyDark: '#1e293b',
      green: '#22c55e',
      greenLight: '#16a34a',
      greenDark: '#15803d',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      dark: '#031031',
      gradientLight: 'linear-gradient(135deg, #f0f8f4 0%, #f7fafc 100%)',
      gradientDark: 'linear-gradient(135deg, #031031 0%, #1e3a8a 100%)',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      tertiary: '#94a3b8',
      light: '#e2e8f0',
      white: '#ffffff',
    },
    border: {
      light: 'rgba(30, 58, 138, 0.08)',
      medium: 'rgba(30, 58, 138, 0.15)',
    },
    shadow: {
      sm: '0 2px 8px rgba(30, 58, 138, 0.08)',
      md: '0 4px 15px rgba(30, 58, 138, 0.1)',
      lg: '0 8px 25px rgba(30, 58, 138, 0.15)',
    }
  },

  // Typography
  typography: {
    fontFamily: "'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.85rem',
      base: '0.95rem',
      lg: '1.1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
      loose: 1.7,
    }
  },

  // Spacing
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },

  // Border Radius
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
  },

  // Transitions
  transition: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },

  // Breakpoints
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },

  // Component Styles
  components: {
    button: {
      primary: {
        background: 'linear-gradient(135deg, #22c55e, #15803d)',
        color: '#ffffff',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
      },
      secondary: {
        background: 'transparent',
        color: '#1e3a8a',
        border: '2px solid #1e3a8a',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
      }
    },
    card: {
      default: {
        background: '#ffffff',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)',
        border: '1px solid rgba(30, 58, 138, 0.08)',
        transition: 'all 0.3s ease',
      }
    },
    section: {
      default: {
        padding: '4rem 1rem',
      },
      compact: {
        padding: '3rem 1rem',
      },
      large: {
        padding: '5rem 1rem',
      }
    }
  }
};

// Helper functions for responsive design
export const responsive = {
  mobile: `@media (max-width: ${theme.breakpoints.sm})`,
  tablet: `@media (max-width: ${theme.breakpoints.md})`,
  desktop: `@media (min-width: ${theme.breakpoints.lg})`,
  
  // Responsive font sizes
  fontSize: (min, max) => `clamp(${min}, 4vw, ${max})`,
  
  // Responsive spacing
  spacing: (min, max) => `clamp(${min}, 3vw, ${max})`,
};

// Common style patterns
export const patterns = {
  // Gradient backgrounds
  gradientBg: (color1, color2) => `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
  
  // Hover effects
  hoverLift: {
    transform: 'translateY(-4px)',
    boxShadow: theme.colors.shadow.lg,
  },
  
  // Text gradients
  textGradient: (color1, color2) => ({
    background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }),
  
  // Glass morphism
  glassMorphism: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  
  // Flex center
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Grid responsive
  gridResponsive: (minWidth = '280px') => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
    gap: theme.spacing.xl,
  }),
};

export default theme;