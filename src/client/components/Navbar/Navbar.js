import React from 'react';
import logo from "./../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <img src={logo} alt="logo" width="122" />
                    <Link to="/" className="brand-logo"> Meal-Sharing</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/meals">Meals</Link></li>
                        <li><Link to="/create-meal">Add Meal</Link></li>
                        <li><Link to="/test-component">Test</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
