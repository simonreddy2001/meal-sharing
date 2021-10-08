import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import ReactStars from "react-rating-stars-component";
import Pics from '../Helper/Pics';

const AddReservation = (props) => {
    const params = useParams();
    const meal = props.meals.filter((m) => m.id == Number(params.id))[0];
    const avgStars = props.stars.filter((m) => m.id == Number(params.id))[0];
    const [reservation, setReservation] = useState();
    const [guests, setGuests] = useState();
    const date = Moment(new Date()).format('YYYY-MM-DD');
    const [contact, setContact] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [availableReservations, setAvailableReservations] = useState(null)
    const [pics, setPics] = useState(Pics)


    useEffect(() => {
        fetch(`api/meals?availableReservations=true`)
            .then(res => res.json())
            .then(meals => {
                const meal1 = meals.filter((m) => m.id === Number(params.id))[0];
                setAvailableReservations(meal1 ? meal1.No_of_available_reservations : meal.max_reservations)
            })
        console.log(reservation);
        if (reservation) {
            fetch("/api/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reservation),
            })
                .then(res => res.text())
                .then(text => console.log(text))
                .then((data) => {
                    console.log("Success:", data);
                    alert('Successfully Added Reservation')
                    location.href = '/';
                })
                .catch((error) => {
                    console.log("Error:", error);
                    alert(error)
                });
        }
    }, [reservation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReservation = {
            number_of_guests: guests,
            meal_id: Number(params.id),
            created_date: date,
            contact_phonenumber: contact,
            contact_name: name,
            contact_email: email,
        };
        setReservation(newReservation);
        console.log(reservation);
        setName(''); setContact(''); setEmail(''); setGuests('')
    };
    return (
        <>
            <Navbar />

            {meal ? (<>
                <div className="row">
                    <div className="col s12 ">
                        <div className="card blue-grey darken-1">
                            <div className="card-image">
                                <img src={pics[meal.id] ? pics[meal.id] : pics[meal.id % 5]} alt="background-image" className="center" />
                            </div>
                            <div className="card-content white-text">
                                <span className="card-title">{meal.title}</span>
                                <p>Details: {meal.description}</p>
                                <p>Location: {meal.location}</p>
                                <p>Price: {meal.price}</p>
                                <p>Maximum Reservations: {meal.max_reservations}</p>
                                <p>Available Reservations: {availableReservations}</p>
                                <p>Created On: {meal.created_date.slice(0, 10)}</p>
                                <ReactStars {...
                                    {
                                        value: Math.ceil(Number(avgStars ? avgStars.avg_stars : 0)),
                                        edit: false
                                    }} />
                            </div>
                            <div className="card-action">
                                <Link to={`/meals/${meal.id}`}>Reserve</Link>
                                <Link to={`/meals/${meal.id}/reviews`}>Check Reviews</Link>
                            </div></div>
                    </div>
                </div>
                <div className="row">
                    <form className="col s12" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="full_name" type="text" className="validate" value={name || ''} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="full_name">Full Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="no_guests" type="number" className="validate" min="1" max={availableReservations} value={guests || ''} onChange={(e) => setGuests(e.target.value)} />
                                <label htmlFor="no_guests">Number of Guests</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="phone" type="tel" className="validate" pattern="[0-9]{8}" value={contact || ''} onChange={(e) => setContact(e.target.value)} />
                                <label htmlFor="phone">Phone Number ( Ex: 12345678 )</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit">RESERVE
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </>) : <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>

            }
            <Footer />
        </>
    );
};

export default AddReservation;
