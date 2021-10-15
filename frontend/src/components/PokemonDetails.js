import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadDetails } from '../store/actions/PokemonAction'

const mapDetailStateToProps = ({ detailsState }) => {
  return { detailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => dispatch(LoadDetails(id))
  }
}

const Details = (props) => {
  console.log(props.detailState)
  useEffect(() => {
    props.fetchDetails(props.match.params.id)
  }, [])
}
return (
  <div>
    <p></p>
  </div>
)

export default connect(mapDetailStateToProps, mapDispatchToProps)(Details)
