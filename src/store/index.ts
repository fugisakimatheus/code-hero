import { is } from 'immutable'
import { useDispatch as reduxDispatch, useSelector as reduxSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { AnyAction, configureStore, Dispatch as DispatchType } from '@reduxjs/toolkit'

import rootSaga from './ducks/characterSaga'
import characterReducer, { actions as actionsSlice } from './ducks/characterSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    character: characterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
  devTools: true
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export const useDispatch = (): DispatchType<AnyAction> => reduxDispatch<Dispatch>()
export const useSelector = <R>(selector: (state: RootState) => R) => {
  return reduxSelector<RootState, R>(selector, is)
}

export const actions = actionsSlice

export default store
