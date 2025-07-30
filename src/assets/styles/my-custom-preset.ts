import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const myCustomPreset = definePreset(Aura, {
  semantic: {
    // === 🔵 PRIMARY: Azul Profesional ===
    primary: {
      50: '#E6EEF3',
      100: '#B3C9D9',
      200: '#80A4BF',
      300: '#4D7FA5',
      400: '#2A5A8C',
      500: '#093956', // Azul principal
      600: '#082C43', // Azul oscuro
      700: '#061F31',
      800: '#051828',
      950: '#04121F'
    },

    // === 🟡 SECONDARY: Mostaza (Acento cálido) ===
    secondary: {
      50: '#FFF8E1',
      100: '#FFECB3',
      200: '#FFE082',
      300: '#FFD54F',
      400: '#FFCA28',
      500: '#E6B500', // Mostaza principal
      600: '#D1A000',
      700: '#B88A00',
      800: '#9D7600',
      950: '#6B5000'
    },

    // === ⚪ BLANCO & 🌫️ GRIS: Neutros para modo oscuro ===
    neutral: {
      0: '#000000',      // Negro puro
      50: '#111827',     // Gris carbón (fondo principal)
      100: '#1F2937',    // Gris azulado oscuro
      200: '#374151',
      300: '#4B5563',
      400: '#6B7280',
      500: '#9CA3AF',
      600: '#D1D5DB',
      700: '#E5E7EB',
      800: '#F3F4F6',
      950: '#FFFFFF'     // Blanco puro
    },

    // === 🎨 Otros colores semánticos (opcionales pero recomendados) ===
    success: {
      500: '#10B981',
      600: '#059669',
      700: '#047857'
    },
    info: {
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8'
    },
    warn: {
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309'
    },
    danger: {
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C'
    },
    help: {
      500: '#0EA5E9',
      600: '#0C8DE3',
      700: '#0B7DD4'
    },
    contrast: {
      800: '#1F2937',
      900: '#111827'
    },

    // === 🌗 ESQUEMA DE COLOR: Modo oscuro activo por defecto ===
    colorScheme: {
      dark: {
        surface: {
          0: '{neutral.50}',   // #111827 – fondo principal
          50: '{neutral.100}', // #1F2937 – cards
          100: '{neutral.200}',
          200: '{neutral.300}',
          300: '{neutral.400}',
          400: '{neutral.500}',
          500: '{neutral.600}',
          600: '{neutral.700}',
          700: '{neutral.800}',
          800: '{neutral.900}',
          900: '{neutral.950}' // #FFFFFF
        },
        text: {
          color: '{neutral.950}',        // Blanco
          secondaryColor: '{neutral.500}' // Gris claro
        },
        primary: {
          color: '{primary.500}',         // Azul
          inverseColor: '{neutral.0}',    // Negro sobre azul
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

    // === 🖋️ TIPOGRAFÍA ===
    font: {
      family: 'Inter, sans-serif',
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
        dark: {
          root: {
            borderRadius: '8px',
            paddingY: '0.75rem',
            paddingX: '1.5rem',
            label: { fontWeight: '700' },

            // === PRIMARY: Azul ===
            primary: {
              background: '{primary.500}',
              hoverBackground: '{primary.400}',
              activeBackground: '{primary.600}',
              color: '#FFFFFF'
            },

            // === SECONDARY: Mostaza ===
            secondary: {
              background: '{secondary.500}',
              hoverBackground: '{secondary.400}',
              activeBackground: '{secondary.600}',
              color: '#000000' // Texto negro para contraste
            },

            // === SUCCESS, INFO, WARN, etc. ===
            success: {
              background: '{success.600}',
              hoverBackground: '{success.700}',
              activeBackground: '{success.800}',
              color: '#FFFFFF'
            },
            info: {
              background: '{info.600}',
              hoverBackground: '{info.700}',
              activeBackground: '{info.800}',
              color: '#FFFFFF'
            },
            warn: {
              background: '{warn.600}',
              hoverBackground: '{warn.700}',
              activeBackground: '{warn.800}',
              color: '#FFFFFF'
            },
            danger: {
              background: '{danger.600}',
              hoverBackground: '{danger.700}',
              activeBackground: '{danger.800}',
              color: '#FFFFFF'
            },
            help: {
              background: '{help.600}',
              hoverBackground: '{help.700}',
              activeBackground: '{help.800}',
              color: '#FFFFFF'
            },
            contrast: {
              background: '{neutral.900}',
              hoverBackground: '{neutral.800}',
              activeBackground: '{neutral.700}',
              color: '#FFFFFF'
            }
          },

          // === OUTLINED ===
          outlined: {
            primary: {
              borderColor: '{primary.500}',
              color: '{primary.500}',
              hoverBackground: '{primary.900}',
              activeBackground: '{primary.800}'
            },
            secondary: {
              borderColor: '{secondary.500}',
              color: '{secondary.500}',
              hoverBackground: '{secondary.900}',
              activeBackground: '{secondary.800}'
            },
            success: {
              borderColor: '{success.600}',
              color: '{success.600}',
              hoverBackground: '{success.900}',
              activeBackground: '{success.800}'
            },
            info: {
              borderColor: '{info.600}',
              color: '{info.600}',
              hoverBackground: '{info.900}',
              activeBackground: '{info.800}'
            },
            warn: {
              borderColor: '{warn.600}',
              color: '{warn.600}',
              hoverBackground: '{warn.900}',
              activeBackground: '{warn.800}'
            },
            danger: {
              borderColor: '{danger.600}',
              color: '{danger.600}',
              hoverBackground: '{danger.900}',
              activeBackground: '{danger.800}'
            },
            help: {
              borderColor: '{help.600}',
              color: '{help.600}',
              hoverBackground: '{help.900}',
              activeBackground: '{help.800}'
            },
            contrast: {
              borderColor: '{neutral.700}',
              color: '{neutral.300}',
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

          // === TEXT ===
          text: {
            primary: {
              color: '{primary.500}',
              hoverBackground: '{primary.900}',
              activeBackground: '{primary.800}'
            },
            secondary: {
              color: '{secondary.500}',
              hoverBackground: '{secondary.900}',
              activeBackground: '{secondary.800}'
            },
            success: {
              color: '{success.600}',
              hoverBackground: '{success.900}',
              activeBackground: '{success.800}'
            },
            info: {
              color: '{info.600}',
              hoverBackground: '{info.900}',
              activeBackground: '{info.800}'
            },
            warn: {
              color: '{warn.600}',
              hoverBackground: '{warn.900}',
              activeBackground: '{warn.800}'
            },
            danger: {
              color: '{danger.600}',
              hoverBackground: '{danger.900}',
              activeBackground: '{danger.800}'
            },
            help: {
              color: '{help.600}',
              hoverBackground: '{help.900}',
              activeBackground: '{help.800}'
            },
            contrast: {
              color: '{neutral.300}',
              hoverBackground: '{neutral.900}',
              activeBackground: '{neutral.800}'
            },
            plain: {
              color: '{neutral.400}',
              hoverBackground: '{neutral.900}',
              activeBackground: '{neutral.800}'
            }
          },

          // === LINK ===
          link: {
            color: '{primary.500}',
            hoverColor: '{primary.400}',
            activeColor: '{primary.600}'
          }
        }
      }
    }
  }
});
