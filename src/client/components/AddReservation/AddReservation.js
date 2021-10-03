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
                        <div className="card-content white-text">
                            <span className="card-title">{meal.title}</span>
                            <p>:{meal.description}</p>
                            <p>Location:{meal.location}</p>
                            <p>Price:{meal.price}</p>
                        </div>
                        <div className="card-action">
                            <a href={`/meals/${meal.id}`}>Reserve</a>
                            <a href={`/meals/${meal.id}/reviews`}>Check Reviews</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                            <label htmlFor="disabled">Disabled</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            This is an inline input field:
                            <div className="input-field inline">
                                <input id="email_inline" type="email" className="validate" />
                                <label htmlFor="email_inline">Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AddReservation;
