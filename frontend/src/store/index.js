import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import PokemonReducer from './reducers/PokemonReducer'
import DetailReducer from './reducers/DetailReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ pokemonState: PokemonReducer, detailState: DetailReducer }),
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
