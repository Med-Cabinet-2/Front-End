import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Navbar = () => {

  const FlexDiv = styled.div`
    display: flex
    justify-content: space-evenly;
    width: 60%;
    margin: 0 auto;
  `
  return (
    <FlexDiv>
      <Link to={"/Account/SignUp"}>
        <p>
          Register
        </p>
      </Link>
      <Link to={"/Account/LogIn"}>
        <p>
          Log In
        </p>
      </Link>
      <Link to={"/Dashboard"}>
        <p>
          Dashboard
        </p>
      </Link>
      <Link to={"/PendingRequests"}>
        <p>
          Find Strains
        </p>
      </Link>
    </FlexDiv>
  )
}

export default Navbar
