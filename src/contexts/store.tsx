import React, { useState, createContext, useEffect } from 'react'

import useDebounce from 'hooks/useDebounce'
import { CharacterType } from 'store/ducks/characterSlice'
import { actions, useDispatch, useSelector } from 'store'

type ParamsType = {
  limit?: number
  offset?: number
  nameStartsWith?: string
}

export type StoreContextType = {
  page: number
  filter: string
  details: CharacterType
  setDetails: (details: CharacterType) => void
  onChangePage: (page: number) => void
  setFilter: (name: string) => void
}

export const StoreContext = createContext({} as StoreContextType)

export const StoreProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch()

  const offset = useSelector(state => state.character.offset)

  const [details, setDetails] = useState({} as CharacterType)
  const [page, setPage] = useState(0)
  const [filter, setFilter] = useState('')

  function searchCharacters(name: string | undefined) {
    const params: ParamsType = {
      nameStartsWith: name,
      limit: 10,
      offset
    }

    if (!name || name.trim().length === 0) {
      delete params.nameStartsWith
    }

    dispatch(actions.fetchCharacters(params))
  }

  const debouncedFilter = useDebounce(filter, 280)

  useEffect(() => {
    searchCharacters(debouncedFilter)
  }, [debouncedFilter, offset])

  function onChangePage(page: number) {
    dispatch(actions.setOffset(page * 10))
    setPage(page)
  }

  return (
    <StoreContext.Provider
      value={{
        page,
        filter,
        details,
        setDetails,
        onChangePage,
        setFilter
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
