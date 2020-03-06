import React, { useEffect } from "react"
import { connect } from "react-redux"
import MainPageDiv from "./MainPageDiv"
import { getStrainData } from "../actions/index"


const MainPage = props => {

  console.log(props)

  useEffect(() => {
    setTimeout(
      props.getStrainData()
      , 200)
  }, [])

  return (
    props.strains.map(strain => {
      return (
        <div>
          <MainPageDiv strain={strain} />
        </div>
      )
    })
  )
}

const mapStateToProps = state => {
  console.log("state inside mapStateToProps of MainPage", state)
  return {
    strains: state.strains
  }
}

export default connect(
  mapStateToProps,
  { getStrainData }
)(MainPage)
