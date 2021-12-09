import React from 'react'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import Routes from 'router/routes'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'store'

import { NotifyProvider } from 'contexts/notify'
import { StoreProvider } from 'contexts/store'
import customTheme from 'styles/customTheme'

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={customTheme}>
        <NotifyProvider>
          <StoreProvider>
            <CSSReset />
            <Routes />
          </StoreProvider>
        </NotifyProvider>
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default App
