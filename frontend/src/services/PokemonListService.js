import Client from './index'
import { axiosConfig } from '../globals'

export const GetPokemons = async () => {
  try {
    const res = await Client.get('/discover/pokemon', axiosConfig)
    console.log(res.data.results)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetPokemonsById = async (id) => {
  try {
    const res = await Client.get(`/pokemon/${id}`, axiosConfig)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}
