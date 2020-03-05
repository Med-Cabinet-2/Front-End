import React from 'react';
import { NavLink } from 'react-router-dom';


import logo from '../img/logo.png';
import {T} from '../App'




export default function Header() {
    return(
        <T.Header>
            <img src={logo} alt='weed picker logo'/>
            

            <T.NavBar>
                <T.NavLinkx to="/Dashboard">Dashboard</T.NavLinkx>
                <T.NavLinkx to="/Search">Strains Search</T.NavLinkx>
                <T.NavLinkx to="/Login">Login/Sign up</T.NavLinkx>
                <T.NavLinkx to="/Recommender">Search By Keyword</T.NavLinkx>
            </T.NavBar>
        </T.Header>
    );
}