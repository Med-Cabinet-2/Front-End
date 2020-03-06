import React, { useEffect } from "react"
import { connect } from "react-redux"
import DashboardDiv from "./DashboardDiv"
import { getSavedStrainData } from "../actions/index"

// export const Dashboard = () => {
//   return (
//     <DashboardDiv />
//   )
// }

const Dashboard = props => {

  const id = window.localStorage.getItem('id');

  console.log(props)

  useEffect(() => {
    setTimeout(
      props.getSavedStrainData(id)
      , 200)
  }, [])

  return (
    props.savedStrains.map(strain => {
      return (
        <div>
          <DashboardDiv strain={strain} />
        </div>
      )
    })
  )
}

const mapStateToProps = state => {
  return {
    savedStrains: state.savedStrains
  }
}

export default connect(
  mapStateToProps,
  { getSavedStrainData }
)(Dashboard)
