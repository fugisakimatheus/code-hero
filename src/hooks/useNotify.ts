import { useContext } from 'react'
import { NotifyContext, NotifyContextType } from 'contexts/notify'

export const useNotify = (): NotifyContextType => {
  return useContext(NotifyContext)
}
