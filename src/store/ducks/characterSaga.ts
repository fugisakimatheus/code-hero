import { PayloadAction } from '@reduxjs/toolkit'
import { takeLatest, put, call } from 'redux-saga/effects'
import { actions, FetchCharactersType, CharacterType } from './characterSlice'
import { api } from 'services/api'
import { AxiosResponse } from 'axios'

export default function* watchSagas(): Generator {
  // actions.fetchCharactersSaga.type é o equivalente a characters/fetchCharacters
  yield takeLatest(actions.fetchCharacters.type, fetchCharactersSaga)
}

type FetchCharacterReturnType = {
  data: {
    results: CharacterType[]
    offset: number
    total: number
  }
}

function* fetchCharactersSaga(action: PayloadAction<FetchCharactersType>) {
  try {
    const params = action.payload
    const { data: response }: AxiosResponse<FetchCharacterReturnType> = yield call(() =>
      api.get('', { params })
    )

    const successParams = {
      characters: response.data.results,
      offset: response.data.offset,
      total: response.data.total
    }

    yield put(actions.fetchCharactersSuccess(successParams))
  } catch (error) {
    yield put(actions.fetchCharactersError())
  }
}
