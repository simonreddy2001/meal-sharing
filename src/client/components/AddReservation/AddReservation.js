import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Moment from 'moment';

const AddReservation = (props) => {
    const params = useParams();
    const meal = props.meals.filter((m) => m.id == Number(params.id))[0];
    const [reservation, setReservation] = useState({});
    const [guests, setGuests] = useState(1);
    const date = Moment(new Date()).format('YYYY-MM-DD');
    const [contact, setContact] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        console.log(reservation);
        fetch("http://localhost:5000/api/reservations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reservation),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.log("Error:", error);
                alert(error)
            });
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
    };
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
                                <Link to={`/meals/${meal.id}`}>Reserve</Link>
                                <Link to={`/meals/${meal.id}/reviews`}>Check Reviews</Link>
                            </div></>) : "Loading"}
                    </div>
                </div>
            </div>
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="full_name" type="text" className="validate" onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="full_name">Full Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="no_guests" type="number" className="validate" min="1" onChange={(e) => setGuests(e.target.value)} />
                            <label htmlFor="no_guests">Number of Guests</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="phone" type="tel" className="validate" onChange={(e) => setContact(e.target.value)} />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">RESERVE
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AddReservation;
