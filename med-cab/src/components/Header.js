import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../img/logo.png';

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export default function Header() {
    return(
        <StyledHeader>
            <img src={logo} alt='weed picker logo'/>

            <NavBar>
                <Link>Dashboard</Link>
                <Link>Strains Search</Link>
                <Link>Login/Sign up</Link>
            </NavBar>
        </StyledHeader>
    );
}