import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Moment from 'moment';

const Createmeal = () => {
    const [newMeal, setNewMeal] = useState();
    const [title, setTitle] = useState("");
    const date = Moment(new Date()).format('YYYY-MM-DD');
    const [maxReservations, setMaxReservations] = useState(0);
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [when, setWhen] = useState();
    const [price, setPrice] = useState();
    useEffect(() => {
        console.log(newMeal);
        if (newMeal) {
            fetch("http://localhost:5000/api/meals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newMeal),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                    // alert(error)
                });
        }
    }, [newMeal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const createMeal = {
            title: title,
            created_date: date,
            max_reservations: maxReservations,
            description: description,
            location: location,
            when: when,
            price: price
        };
        setNewMeal(createMeal);
        console.log(newMeal);
    };
    return (
        <div>
            <Navbar />
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" onChange={(e) => setTitle(e.target.value)} />
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
                            <input id="location" type="text" className="validate" onChange={(e) => setLocation(e.target.value)} />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="price" type="number" className="validate" min="1" onChange={(e) => setPrice(e.target.value)} />
                            <label htmlFor="price">Price</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="max_reservations" type="number" className="validate" min="1" onChange={(e) => setMaxReservations(e.target.value)} />
                            <label htmlFor="max_reservations">Maximum Reservations Available</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="when" type="date" className="validate" onChange={(e) => setWhen(e.target.value)} />
                            <label htmlFor="when">Available Date</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Create A Meal
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div >
            <Footer />
        </div >
    );
}

export default Createmeal;
