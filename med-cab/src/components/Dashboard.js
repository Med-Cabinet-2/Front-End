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

  console.log(props)

  useEffect(() => {
    setTimeout(
      props.getSavedStrainData()
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
