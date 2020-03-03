import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'



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
  align-items: center;
  justify-content: space-around;
  color: ${props => props.theme.blinded};
  background-color: ${props => props.theme.primary};

`

export const In = styled.section `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  color: ${props => props.theme.sunrise};
  background-color: ${props => props.theme.primary};

`

export const Up = styled.section `
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 70%;

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