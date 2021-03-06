import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">ABOUT US</h5>
                        <p className="grey-text text-lighten-4">We are having food across the globe and having passion to serve customers with all contenent foods.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Follow Us</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2021 MealSharing,Inc
                    <a className="grey-text text-lighten-4 right" href="#!">Blog</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
