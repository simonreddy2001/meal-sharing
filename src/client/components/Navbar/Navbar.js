import React, { useEffect } from 'react';
import logo from "./../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            let sidenav = document.querySelectorAll('.sidenav')
            M.Sidenav.init(sidenav, { edge: 'right' });
        })

    }, []);
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <img src={logo} alt="logo" width="122" />
                    <Link to="/" className="brand-logo"> Meal-Sharing</Link>
                    <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/meals">Meals</Link></li>
                        <li><Link to="/create-meal">Add Meal</Link></li>
                        <li><Link to="/test-component">Test</Link></li>
                    </ul>
                    <ul className="sidenav" id="mobile-nav">
                        <li><Link to="/meals">Meals</Link></li>
                        <li><Link to="/create-meal">Add Meal</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
