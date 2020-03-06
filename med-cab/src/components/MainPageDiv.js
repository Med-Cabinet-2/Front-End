import React from "react"
import { connect } from "react-redux"
import { addSavedStrainData } from "../actions"

// export const DashboardDiv = () => {
//   return (
//     <div> HEY IT WORKS</div>
//   )
// }



const MainPageDiv = props => {
  console.log("props inside MainPageDiv", props)
  const id = window.localStorage.getItem('id');
  return (
    <>
      <h1>{props.strain.strain_name}</h1>
      <p>{props.strain.strain_type}</p>
      <p>{props.strain.strain_rating}</p>
      <p>{props.strain.strain_effects}</p>
      <p>{props.strain.strain_flavors}</p>
      <p>{props.strain.strain_description}</p>
      <button onClick={() => { props.addSavedStrainData(id, props.strain.strain_id) }}>Save</button>
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
    strains: state.strains,
    strain: props.strain
  }
}

export default connect(
  mapStateToProps,
  { addSavedStrainData }
)(MainPageDiv)

