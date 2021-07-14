import theme from './customTheme'

export default {
  '&::-webkit-scrollbar': {
    width: '7px'
  },
  '&::-webkit-scrollbar-track': {
    width: '8px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.colors.smoke['700']
  }
}
