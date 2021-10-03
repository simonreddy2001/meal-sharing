import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useParams } from "react-router";

const Mealreviews = (props) => {
    // const [mealReviews, setMealReviews] = React.useState([])
    const params = useParams();
    const meal = props.meals.filter((m) => m.id == Number(params.id))[0];
    const mealReviews = props.reviews.filter((r) => r.meal_id == Number(params.id));
    // setMealReviews(mealReviews.concat(mealReview))
    console.log(meal)
    console.log(mealReviews)
    return (
        <div>
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
                                <ul>
                                    {mealReviews.map((rev) => (
                                        <li key={rev.id}>
                                            <div className="row">
                                                <div className="col s12 m6">
                                                    <div className="card blue-grey darken-1">
                                                        <div className="card-content white-text">
                                                            <span className="card-title">{rev.title}</span>
                                                            <p>{rev.description}</p>
                                                        </div>
                                                        <div className="card-action">
                                                            <p>{rev.stars}</p>
                                                            <p>{rev.created_date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div></>) : "Loading"}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Mealreviews;
