import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'

//Frances Hansen

const theme = {
  primary: '#170617',
  secondary: '#1D510D',
  highlight: '#0E7AEE',
  sunrise: '#ffd400',
  retro: '#D41BB9',
  blinded: '#fff',


}

export const Header = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.secondary};

`

export const NavBar = styled.nav`
    display: flex;
    justify-content: center;

    
`;

export const NavLinkx = styled(NavLink)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: ${props => props.theme.blinded};
    text-decoration: none;
    width: 100%;
    
`;

export const Wrap = styled.section `
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  color: ${props => props.theme.blinded};
  background-color: ${props => props.theme.primary};
  height: 70vh;

`

export const In = styled.section `
display: flex;
flex-direction: column;
flex-wrap: nowrap;
margin: auto;
align-items: center;
justify-content: center;

  

`

export const Up = styled.section `
display: flex;
flex-direction: column;
flex-wrap: nowrap;
margin: auto;
align-items: center;
justify-content: center;

`

export const P = styled.p `

width: 100%;
font-size: .5rem;
color: #d50cd1;
z-index: 10001;
margin-left: -100%;
margin-bottom: -30%;


`

export const WeedBox = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 150px;
  height: 150px;
  border: 1px solid black;

`

export const WeedBoxContainer = styled.section `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%;
  
  border: 1px solid red;

`

export const H1 = styled.h1 `
background-image: linear-gradient(to left, #020d22, #052143, #043467, #02488e, #035db6, #6264cb, #9d66d8, #d566dc, #ff5bae, #ff7375, #ffa33b, #ffd400);

color: ${props => props.theme.sunrise};
`

export const Footer = styled.footer `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  color: ${props => props.theme.sunrise};
  background-color: ${props => props.theme.primary};

`





export default theme