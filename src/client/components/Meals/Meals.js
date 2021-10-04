import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Meals = (props) => {
    return (
        <div>
            <Navbar />
            <ul>
                {props.meals.map((meal) => (
                    <li key={meal.id}>
                        <div className="row">
                            <div className="col s12">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{meal.title}</span>
                                        <p>{meal.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/meals/${meal.id}`}>Reserve</Link>
                                        <Link to={`/meals/${meal.id}/reviews`}>Check Reviews</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
}

export default Meals;
