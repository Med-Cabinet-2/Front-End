import React from "react"
import { connect } from "react-redux"

const Dashboard = props => {
  props.strains.map(strain => {
    <DashboardDiv />
  })
}

const mapStateToProps = state => {
  return {
    strains: props//fill in
  }
}

export default connect(
  mapStateToProps,
  {}
)(Dashboard)
