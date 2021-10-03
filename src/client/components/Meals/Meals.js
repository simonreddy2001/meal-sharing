import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Meals = (props) => {
    return (
        <div>
            <Navbar />
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
            <Footer />
        </div>
    );
}

export default Meals;
