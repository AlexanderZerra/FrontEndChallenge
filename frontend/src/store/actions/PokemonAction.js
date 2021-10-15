import { GET_POKEMONS } from '../types'
import { GetPokemons, GetPokemonsById } from '../../services/PokemonListService'
import { GET_DETAILS } from '../types'

export const LoadPokemons = () => {
  return async (dispatch) => {
    try {
      const pokemons = await GetPokemons()
      dispatch({ type: GET_POKEMONS, payload: pokemons })
    } catch (error) {
      throw error
    }
  }
}

export const LoadPokemons = (id) => {
  return async (dispatch) => {
    try {
      const details = await GetPokemonsById(id)
      console.log(details)
      dispatch({ type: GET_DETAILS, payload: details })
    } catch (error) {
      throw error
    }
  }
}
