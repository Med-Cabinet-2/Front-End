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
  margin-top: 0;
  
  

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.blinded};
  background-color: ${props => props.theme.primary};

  width: 100%;
  margin: auto ;


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
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  border: 1px solid black;
  background: #0B300B;
  -webkit-box-shadow: 0px 0px 26px 12px rgba(22,160,0,1);
  -moz-box-shadow: 0px 0px 26px 12px rgba(22,160,0,1);
  box-shadow: 0px 0px 26px 12px rgba(22,160,0,1);
  margin: 1.5rem 1.6rem;
 
  

`

export const WeedBoxContainer = styled.section `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 90%;
  text-align: center;
  margin: auto;
  
 height: 300px;
   padding-bottom: 30%;

  
  

`

export const FormBox = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  width: 1000px;
  
  padding-bottom: 3%;
  
  margin: auto;
  
  

`
export const Inputx = styled.input `
text-align: center;
background: #212121;
color: ${props => props.theme.retro};
border: none;
font-size: 1em;
margin-bottom: 4%;
  
  

`

export const FilterBox = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  width: 500px;

  margin: auto;
  margin-bottom: 2%;

  

`

export const A = styled.a `
font-size: 1.5em;
color:  ${props => props.theme.retro};
  
   &:visited {
    color: ${props => props.theme.blinded}
  }

  &:hover {
    color: ${props => props.theme.retro};
  }

  &:active {
    color: green;
  }
  
  

`

export const H1 = styled.h1 `
background-image: linear-gradient(to left, #020d22, #052143, #043467, #02488e, #035db6, #6264cb, #9d66d8, #d566dc, #ff5bae, #ff7375, #ffa33b, #ffd400);

color: ${props => props.theme.sunrise};

max-width: 85% !important;
width: 750px;
margin: 3% auto;
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