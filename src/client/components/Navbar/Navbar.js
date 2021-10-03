import React from 'react';
import logo from "./../../assets/images/logo.png"

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <img src={logo} alt="logo" width="122" />
                    <a href="#" className="brand-logo"> Meal-Sharing</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/meals">Meals</a></li>
                        <li><a href="/create-meal">Add Meal</a></li>
                        <li><a href="/testComponemt">Test</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
