import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/daemon_logo_navbar.png'

function NavBar() {
    return (
        <nav>
            <ul>
            <li>
            <img src ={Logo} alt ="Daemon Logo"></img>
            </li>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to ="/gamehomepage"> Games </Link>
                </li>
                <li>
                    <Link to ="/forumhomepage"> Forum </Link>
                </li>
                <li>
                    <Link to ="/about"> About </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;