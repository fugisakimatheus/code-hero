import React from 'react'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import Routes from 'router/routes'

import { NotifyProvider } from 'contexts/notify'
import { StoreProvider } from 'contexts/store'
import customTheme from 'styles/customTheme'

const App: React.FC = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <NotifyProvider>
        <StoreProvider>
          <CSSReset />
          <Routes />
        </StoreProvider>
      </NotifyProvider>
    </ChakraProvider>
  )
}

export default App
