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
    props.savedStrains.map(strain => {
      return (
        <div>
          <MainPageDiv strain={strain} />
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
  { getStrainData }
)(MainPage)
