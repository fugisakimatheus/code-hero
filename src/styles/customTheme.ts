import { theme, extendTheme } from '@chakra-ui/react'

// Modify to merge theme styles
const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    ...theme.fonts,
    heading: 'PT Sans',
    body: 'PT Sans Caption'
  },
  colors: {
    ...theme.colors,
    smoke: {
      700: '#8E8E8E',
      900: '#555555'
    },
    snow: {
      700: '#f5f5f5',
      900: '#e5e5e5'
    },
    blue: {
      400: '#5DAFFF',
      700: '#167abc'
    },
    border: {
      700: '#00000033'
    }
  },
  shadows: {
    ...theme.shadows,
    outline: '0 !important'
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'none !important'
      }
    }
  }
})

export default customTheme
