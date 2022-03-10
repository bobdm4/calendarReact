import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './redusers'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReduser = combineReducers(reducers)

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
