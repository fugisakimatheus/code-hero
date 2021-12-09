import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export type State = {
  characters: CharacterType[]
  offset: number
  total: number
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}

const initialState: State = {
  characters: [],
  offset: 0,
  total: 0,
  isLoading: false,
  isError: false,
  isSuccess: false
}

export type FetchCharactersType = {
  limit?: number
  offset?: number
  nameStartsWith?: string
}

export type FetchCharacterSuccessType = {
  characters: CharacterType[]
  offset: number
  total: number
}

const reducers = {
  setOffset: (state: State, action: PayloadAction<number>) => {
    state.offset = action.payload
  },
  fetchCharacters: (state: State, action: PayloadAction<FetchCharactersType>) => {
    state.isLoading = true
    state.isError = false
    state.isSuccess = false
  },
  fetchCharactersSuccess: (
    state: State,
    actions: PayloadAction<FetchCharacterSuccessType>
  ) => {
    state.characters = actions.payload.characters
    state.offset = actions.payload.offset
    state.total = actions.payload.total
    state.isLoading = false
    state.isError = false
    state.isSuccess = true
  },
  fetchCharactersError: (state: State) => {
    state.offset = 0
    state.total = 0
    state.isLoading = false
    state.isError = true
    state.isSuccess = false
  }
}

const character = createSlice({
  name: 'character',
  initialState,
  reducers
})

export const actions = character.actions

export default character.reducer
