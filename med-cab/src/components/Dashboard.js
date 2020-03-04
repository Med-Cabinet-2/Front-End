import React from "react"
import { connect } from "react-redux"
import { DashboardDiv } from "./DashboardDiv"

export const Dashboard = () => {
  return (
    <DashboardDiv />
  )
}

// const Dashboard = props => {
//   props.strains.map(strain => {
//     <DashboardDiv />
//   })
// }

// const mapStateToProps = state => {
//   return {
//     strains: state.strains
//   }
// }

// export default connect(
//   mapStateToProps,
//   {}
// )(Dashboard)
