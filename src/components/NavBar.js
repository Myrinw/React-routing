import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

    return <div>
        <NavLink exact={true} to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/discover'>Discover</NavLink>
    </div>
}   