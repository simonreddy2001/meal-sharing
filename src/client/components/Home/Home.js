import React from 'react';
import PropTypes from 'prop-types';
import "./Home.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = (props) => {
    return (<>
        <Navbar />
        <div>
            <h1>Available Meals</h1>
            <p>Developed by Simon</p>
            <ul>
                {props.meals.map((meal) => (

                    <li key={meal.id}>
                        <div className="row">
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{meal.title}</span>
                                        <p>{meal.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href={`/meals/${meal.id}`}>Reserve</a>
                                        <a href={`/meals/${meal.id}/reviews`}>Check Reviews</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <Footer />
    </>
    );
};


Home.propTypes = {

};


export default Home;
