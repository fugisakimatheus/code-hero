import React, { createContext, ReactNode } from 'react'
import { useToast } from '@chakra-ui/react'

type ProviderProps = {
  children: ReactNode
}

type MessageType = {
  title: string
  description: string
}

export interface NotifyContextType {
  showSuccess: (message: string | MessageType) => void
  showWarning: (message: string | MessageType) => void
  showError: (message: string | MessageType) => void
  showInfo: (message: string | MessageType) => void
}

export const NotifyContext = createContext({} as NotifyContextType)

export const NotifyProvider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
  const toast = useToast()

  function notify(
    status: 'info' | 'warning' | 'success' | 'error' | undefined,
    message: string | MessageType
  ): void {
    const common = {
      duration: 3000,
      isClosable: true,
      status
    }
    if (typeof message === 'object') {
      toast({ ...common, ...message })
    }
    toast({ ...common, title: message })
  }

  function showSuccess(message: string | MessageType) {
    notify('success', message)
  }

  function showError(message: string | MessageType) {
    notify('error', message)
  }

  function showWarning(message: string | MessageType) {
    notify('warning', message)
  }

  function showInfo(message: string | MessageType) {
    notify('info', message)
  }

  return (
    <NotifyContext.Provider value={{ showSuccess, showError, showWarning, showInfo }}>
      {children}
    </NotifyContext.Provider>
  )
}
