import React from 'react';
import { useParams } from "react-router";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const AddReservation = (props) => {
    const params = useParams();
    const meal = props.meals.filter((m) => m.id == Number(params.id))[0];
    console.log(meal)
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        {meal ? (<><div className="card-content white-text">
                            <span className="card-title">{meal.title}</span>
                            <p>Details: {meal.description}</p>
                            <p>Location: {meal.location}</p>
                            <p>Price: {meal.price}</p>
                            <p>Maximum Reservations: {meal.max_reservations}</p>
                            <p>Created On: {meal.created_date}</p>
                        </div>
                            <div className="card-action">
                                <a href={`/meals/${meal.id}`}>Reserve</a>
                                <a href={`/meals/${meal.id}/reviews`}>Check Reviews</a>
                            </div></>) : "Loading"}
                    </div>
                </div>
            </div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="no_guests" type="number" className="validate" />
                            <label htmlFor="no_guests">Number of Guests</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="phone" type="tel" className="validate" />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                    </div>

                    <button>RESERVE</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AddReservation;
