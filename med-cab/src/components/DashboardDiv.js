import React from "react"
import { connect } from "react-redux"
import { removeSavedStrainData } from "../actions"

// export const DashboardDiv = () => {
//   return (
//     <div> HEY IT WORKS</div>
//   )
// }

const DashboardDiv = props => {
  console.log("props inside DashboardDiv", props)
  const id = window.localStorage.getItem('id');
  return (
    <>
      <h1>{props.strain.strain_name}</h1>
      <p>{props.strain.strain_type}</p>
      <p>{props.strain.strain_rating}</p>
      <p>{props.strain.strain_effects}</p>
      <p>{props.strain.strain_flavors}</p>
      <p>{props.strain.strain_description}</p>
      <button onClick={() => { props.removeSavedStrainData(id, props.strain.strain_id) }}>Remove</button>
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
    savedStrains: state.savedStrains,
    strain: props.strain
  }
}

export default connect(
  mapStateToProps,
  { removeSavedStrainData }
)(DashboardDiv)

