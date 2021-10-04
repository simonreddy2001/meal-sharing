import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useParams } from "react-router";
import ReactStars from "react-rating-stars-component";
import Moment from 'moment';

const Mealreviews = (props) => {
    const params = useParams();
    const meal = props.meals.filter((m) => m.id == Number(params.id))[0];
    const mealReviews = props.reviews.filter((r) => r.meal_id == Number(params.id));
    const starsValue = {
        size: 40,
        count: 5,
        isHalf: false,
        value: 4,
        activeColor: "yellow",
        onChange: newValue => {
            setStars(newValue)
        }
    };
    const [review, setReview] = useState();
    const [title, setTitle] = useState("");
    const date = Moment(new Date()).format('YYYY-MM-DD');
    const [description, setDescription] = useState("");
    const [stars, setStars] = useState(starsValue.value);

    useEffect(() => {
        console.log(review);
        if (review) {
            fetch("http://localhost:5000/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.log("Error:", error);
                    // alert(error)
                });
        }
    }, [review]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            'title': title,
            'meal_id': Number(params.id),
            'created_date': date,
            'description': description,
            'stars': stars
        };
        setReview(newReview);
        console.log(review);
        setTitle('');
        setDescription('');
        setStars(4);
    };

    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col s12 ">
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
                                    {!mealReviews.length == 0 ? (mealReviews.map((rev) => (
                                        <li key={rev.id}>
                                            <div className="row">
                                                <div className="col s12 m9">
                                                    <div className="card blue-grey darken-1">
                                                        <div className="card-content white-text">
                                                            <span className="card-title">{rev.title}</span>
                                                            <p>{rev.description}</p>
                                                        </div>
                                                        <div className="card-action">
                                                            <ReactStars {...
                                                                {
                                                                    value: `${rev.stars}`,
                                                                    edit: false
                                                                }} />
                                                            <p>{rev.created_date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))) : "No Reviews Available"}
                                </ul>
                            </div></>) : "Loading"}
                    </div>
                </div>
            </div>
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" required onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="description" type="text" className="validate" onChange={(e) => setDescription(e.target.value)} />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <ReactStars {...starsValue} />
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit">Add Review
                        <i className="material-icons right">send</i>
                    </button>

                </form>
            </div >
            <Footer />
        </div>
    );
}

export default Mealreviews;
