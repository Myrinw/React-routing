import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';


export default function NavBar() {

    return <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/discover'>Discover</Link>
    </div>
}