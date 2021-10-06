import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import mobiscroll from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';
import Pics from '../Helper/Pics';

const Meals = (props) => {
    const [pics, setPics] = useState(Pics)

    return (
        <div>
            <Navbar />
            <div className="mbsc-padding">
                <div className="mbsc-grid">
                    <div className="mbsc-row mbsc-justify-content-center mbsc-padding">
                        {props.meals.map((meal) => (
                            <div className="mbsc-col-12 mbsc-col-sm-6 mbsc-col-lg-4 mbsc-col-xl-3" key={meal.id}>
                                <div className="col s12 m4">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={pics[meal.id] ? pics[meal.id] : pics[meal.id % 5]} alt="background-image" className="center" />
                                        </div>
                                        <div className="card-content green-text">
                                            <span className="card-title">{meal.title}</span>
                                            <p>{meal.description}</p>
                                            <ReactStars {...
                                                {
                                                    value: Math.ceil(Number((props.stars.filter((m) => m.id == meal.id)[0]) ? (props.stars.filter((m) => m.id == meal.id)[0]).avg_stars : 5)),
                                                    edit: false
                                                }} />
                                        </div>
                                        <div className="card-action">
                                            <Link to={`/meals/${meal.id}`}>Reserve</Link>
                                            <Link to={`/meals/${meal.id}/reviews`}>Reviews</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div></div>
            <Footer />
        </div>
    );
}

export default Meals;
