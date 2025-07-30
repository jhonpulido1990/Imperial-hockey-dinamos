import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const myCustomPreset = definePreset(Aura, {
  semantic: {
    // === COLORES DE MARCA ===
    primary: {
      50: '#FFEBEE',
      100: '#FFCDD2',
      200: '#EF9A9A',
      300: '#E57373',
      400: '#EF5350',
      500: '#FF3B30', // Rojo vivo (puedes usar #D32F2F para más formal)
      600: '#E62B20',
      700: '#C62017',
      800: '#B71D14',
      950: '#7B0F0A'
    },
    secondary: {
      50: '#FFF8E1',
      100: '#FFECB3',
      200: '#FFE082',
      300: '#FFD54F',
      400: '#FFCA28',
      500: '#E6B500', // Mostaza cálida
      600: '#D1A000',
      700: '#B88A00',
      800: '#9D7600',
      950: '#6B5000'
    },

    // === NEUTROS (negro, blanco, grises) ===
    neutral: {
      0: '#000000',      // Negro puro
      50: '#121212',     // Gris carbón (fondo oscuro suave)
      100: '#1E1E1E',
      200: '#2D2D2D',
      300: '#424242',
      400: '#616161',
      500: '#757575',
      600: '#9E9E9E',
      700: '#BDBDBD',
      800: '#E0E0E0',
      950: '#FFFFFF'     // Blanco puro
    },
    success: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
      800: '#065F46',
      950: '#064E3B'
    },
    info: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      950: '#1E3A8A'
    },
    warn: {
      50: '#FFFAEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      950: '#7C2D12'
    },
    help: {
      50: '#F0F9FF',
      100: '#E0F2FE',
      200: '#BAF0FC',
      300: '#7DD5F8',
      400: '#1BB7F1',
      500: '#0EA5E9',
      600: '#0C8DE3',
      700: '#0B7DD4',
      800: '#1D4ED8',
      950: '#1E40AF'
    },
    danger: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      950: '#7F1D1D'
    },
    contrast: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      950: '#111827'
    },
    // === ESQUEMA DE COLOR (modo oscuro por defecto) ===
    colorScheme: {
      dark: {
        surface: {
          0: '{neutral.0}',     // #000000
          50: '{neutral.50}',   // #121212
          100: '{neutral.100}',
          200: '{neutral.200}',
          300: '{neutral.300}',
          400: '{neutral.400}',
          500: '{neutral.500}',
          600: '{neutral.600}',
          700: '{neutral.700}',
          800: '{neutral.800}',
          900: '{neutral.950}'
        },
        text: {
          color: '{neutral.950}',        // Blanco
          secondaryColor: '{neutral.600}' // Gris claro
        },
        primary: {
          color: '{primary.500}',         // Rojo vivo
          inverseColor: '{neutral.0}',    // Negro para hover o fondo
          hoverColor: '{primary.400}',
          activeColor: '{primary.600}'
        },
        secondary: {
          color: '{secondary.500}',       // Mostaza
          inverseColor: '{neutral.0}',
          hoverColor: '{secondary.400}',
          activeColor: '{secondary.600}'
        }
      }
    },
    // === TIPOGRAFÍA ===
    font: {
      family: 'Montserrat, sans-serif', // Fuente moderna y fuerte
      size: {
        small: '0.875rem',
        base: '1rem',
        large: '1.25rem'
      }
    }
  },
  components: {
    button: {
      colorScheme: {
        // === MODO OSCURO (dark) ===
        dark: {
          root: {
            primary: {
              background: '{primary.700}',
              hoverBackground: '{primary.600}',
              activeBackground: '{primary.800}',
              color: '#FFFFFF'
            },
            secondary: {
              background: '{neutral.700}',
              hoverBackground: '{neutral.600}',
              activeBackground: '{neutral.800}',
              color: '#FFFFFF'
            },
            success: {
              background: '{success.800}',
              hoverBackground: '{success.700}',
              activeBackground: '{success.900}',
              color: '#FFFFFF'
            },
            info: {
              background: '{info.800}',
              hoverBackground: '{info.700}',
              activeBackground: '{info.900}',
              color: '#FFFFFF'
            },
            warn: {
              background: '{warn.800}',
              hoverBackground: '{warn.700}',
              activeBackground: '{warn.900}',
              color: '#FFFFFF'
            },
            help: {
              background: '{help.800}',
              hoverBackground: '{help.700}',
              activeBackground: '{help.900}',
              color: '#FFFFFF'
            },
            danger: {
              background: '{danger.800}',
              hoverBackground: '{danger.700}',
              activeBackground: '{danger.900}',
              color: '#FFFFFF'
            },
            contrast: {
              background: '{contrast.200}',
              hoverBackground: '{contrast.300}',
              activeBackground: '{contrast.100}',
              color: '{neutral.950}'
            }
          },
          outlined: {
            primary: {
              borderColor: '{primary.400}',
              color: '{primary.300}',
              hoverBackground: '{primary.900}',
              activeBackground: '{primary.800}'
            },
            secondary: {
              borderColor: '{neutral.400}',
              color: '{neutral.300}',
              hoverBackground: '{neutral.900}',
              activeBackground: '{neutral.800}'
            },
            success: {
              borderColor: '{success.400}',
              color: '{success.300}',
              hoverBackground: '{success.900}',
              activeBackground: '{success.800}'
            },
            info: {
              borderColor: '{info.400}',
              color: '{info.300}',
              hoverBackground: '{info.900}',
              activeBackground: '{info.800}'
            },
            warn: {
              borderColor: '{warn.400}',
              color: '{warn.300}',
              hoverBackground: '{warn.900}',
              activeBackground: '{warn.800}'
            },
            help: {
              borderColor: '{help.400}',
              color: '{help.300}',
              hoverBackground: '{help.900}',
              activeBackground: '{help.800}'
            },
            danger: {
              borderColor: '{danger.400}',
              color: '{danger.300}',
              hoverBackground: '{danger.900}',
              activeBackground: '{danger.800}'
            },
            contrast: {
              borderColor: '{contrast.700}',
              color: '{contrast.300}',
              hoverBackground: '{neutral.900}',
              activeBackground: '{neutral.800}'
            },
            plain: {
              borderColor: 'transparent',
              color: '{neutral.400}',
              hoverBackground: '{neutral.900}',
              activeBackground: '{neutral.800}'
            }
          },
          text: {
            primary: {
              color: '{primary.300}',
              hoverBackground: '{primary.900}',
              activeBackground: '{primary.800}'
            },
            secondary: {
              color: '{neutral.300}',
              hoverBackground: '{neutral.900}',
              activeBackground: '{neutral.800}'
            },
            success: {
              color: '{success.300}',
              hoverBackground: '{success.900}',
              activeBackground: '{success.800}'
            },
            info: {
              color: '{info.300}',
              hoverBackground: '{info.900}',
              activeBackground: '{info.800}'
            },
            warn: {
              color: '{warn.300}',
              hoverBackground: '{warn.900}',
              activeBackground: '{warn.800}'
            },
            help: {
              color: '{help.300}',
              hoverBackground: '{help.900}',
              activeBackground: '{help.800}'
            },
            danger: {
              color: '{danger.300}',
              hoverBackground: '{danger.900}',
              activeBackground: '{danger.800}'
            },
            contrast: {
              color: '{contrast.300}',
              hoverBackground: '{neutral.900}',
              activeBackground: '{neutral.800}'
            },
            plain: {
              color: '{neutral.400}',
              hoverBackground: '{neutral.900}',
              activeBackground: '{neutral.800}'
            }
          },
          link: {
            color: '{primary.300}',
            hoverColor: '{primary.200}',
            activeColor: '{primary.100}'
          }
        }
      }
    }
  }
});
