import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {LoadPokemon} from '../store/actions/PokemonAction'
import {Link} from 'react-router-dom'


const mapStateToProps({pokemonState}) => {
  return {pokemonState}
}

const mapActionsToProps = (dispatch) => {
  return {
    fetchPokemon: () => dispatch(LoadPokemon())
  }
}

const Pokemons = (props) => {
  useEffect(() => {
    props.fetchPokemon()
  }, [])

  return (
    <div>

    </div>
  )
}



export default connect(mapStateToProps, mapActionsToProps)(Pokemons)