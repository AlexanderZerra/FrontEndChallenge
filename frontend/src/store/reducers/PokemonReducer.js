import { GET_POKEMONS } from '../types'

const initialState = {
  pokemons: [],
  newPokemon: ''
}

const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }
    default:
      return { ...state }
  }
}

export default PokemonReducer
