import { useContext } from 'react'
import { StoreContext, StoreContextType } from 'contexts/store'

export const useStore = (): StoreContextType => {
  return useContext(StoreContext)
}
