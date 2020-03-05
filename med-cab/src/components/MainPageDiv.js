import React from "react"
import { connect } from "react-redux"
import { addSavedStrainData } from "../actions"

// export const DashboardDiv = () => {
//   return (
//     <div> HEY IT WORKS</div>
//   )
// }

const MainPageDiv = props => {
  console.log("props inside DashboardDiv", props)
  return (
    <>
      <h1>{props.strain.strain_name}</h1>
      <p>{props.strain.strain_type}</p>
      <p>{props.strain.strain_description}</p>
      <button onClick={() => { props.addSavedStrainData() }}>Save</button>
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
  { addSavedStrainData }
)(MainPageDiv)

