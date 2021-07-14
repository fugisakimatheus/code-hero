import React, { useState, createContext, useEffect } from 'react'

import { useNotify } from 'hooks/useNotify'
import { api } from 'services/api'

import useDebounce from 'hooks/useDebounce'

export type CharacterType = {
  name: string
  series: {
    items: [{ name: string }]
  }
  events: {
    items: [{ name: string }]
  }
  stories: {
    items: [{ name: string; resourceURI: string }]
  }
  thumbnail: {
    extension: string
    path: string
  }
}

type ParamsType = {
  limit?: number
  offset?: number
  nameStartsWith?: string
}

export type StoreContextType = {
  characters: CharacterType[]
  page: number
  total: number
  offset: number
  filter: string
  loading: boolean
  details: CharacterType
  setDetails: (details: CharacterType) => void
  onChangePage: (page: number) => void
  setFilter: (name: string) => void
}

export const StoreContext = createContext({} as StoreContextType)

export const StoreProvider: React.FC = ({ children }) => {
  const notify = useNotify()

  const [characters, setCharacters] = useState([] as CharacterType[])
  const [details, setDetails] = useState({} as CharacterType)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [offset, setOffset] = useState(0)
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false)

  async function searchCharacters(name: string | undefined) {
    try {
      setLoading(true)
      const params: ParamsType = {
        nameStartsWith: name,
        limit: 10,
        offset
      }

      if (!name || name.length === 0) {
        delete params.nameStartsWith
      }

      const { data: response } = await api.get('', { params })

      setCharacters(
        response.data.results.map((character: CharacterType) => ({
          name: character.name,
          thumbnail: character.thumbnail,
          series: character.series,
          events: character.events,
          stories: character.stories
        }))
      )
      setOffset(response.data.offset)
      setTotal(response.data.total)
    } catch (error) {
      notify.showError(error.response.data.message || 'Erro ao realizar a requisição')
    } finally {
      setLoading(false)
    }
  }

  const debouncedFilter = useDebounce(filter, 400)

  useEffect(() => {
    searchCharacters(debouncedFilter)
  }, [debouncedFilter, offset])

  function onChangePage(page: number) {
    setOffset(page * 10)
    setPage(page)
  }

  return (
    <StoreContext.Provider
      value={{
        characters,
        page,
        total,
        offset,
        filter,
        loading,
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
