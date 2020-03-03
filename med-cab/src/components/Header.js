import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../img/logo.png';
import {T} from '../App'
import Search from './Search';



export default function Header() {
    return(
        <T.Header>
            <img src={logo} alt='weed picker logo'/>
            

            <T.NavBar>
                <T.NavLinkx to="/Dashboard">Dashboard</T.NavLinkx>
                <T.NavLinkx to="/Search">Strains Search</T.NavLinkx>
                <T.NavLinkx to="/Login">Login/Sign up</T.NavLinkx>
                
            </T.NavBar>
        </T.Header>
    );
}