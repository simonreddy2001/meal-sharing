import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Moment from 'moment';

const Createmeal = () => {
    const [newMeal, setNewMeal] = useState();
    const [title, setTitle] = useState("");
    const date = Moment(new Date()).format('YYYY-MM-DD');
    const [maxReservations, setMaxReservations] = useState();
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [when, setWhen] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {
        console.log(newMeal);
        if (newMeal) {
            fetch("/api/meals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newMeal),
            })
                .then(res => res.text())
                .then(text => console.log(text))
                .then((data) => {
                    console.log("Success:", data);
                    alert('Successfully Added Meal')
                    location.href = '/';
                })
                .catch((error) => {
                    console.log("Error:", error);
                    alert(error)
                });
        }
    }, [newMeal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const createMeal = {
            "title": title,
            "created_date": date,
            "max_reservations": maxReservations,
            "description": description,
            "location": location,
            "when": when,
            "price": price
        };
        setNewMeal(createMeal);
        console.log(newMeal);
        setTitle('');
        setMaxReservations('');
        setDescription('');
        setLocation('');
        setWhen('');
        setPrice();
    };
    return (
        <div>
            <Navbar />
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" required value={title || ''} onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="description" type="text" className="validate" required value={description || ''} onChange={(e) => setDescription(e.target.value)} />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="location" type="text" className="validate" required value={location || ''} onChange={(e) => setLocation(e.target.value)} />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="price" type="number" className="validate" min="1" required value={price || ''} onChange={(e) => setPrice(e.target.value)} />
                            <label htmlFor="price">Price</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="max_reservations" type="number" className="validate" min="1" required value={maxReservations || ''} onChange={(e) => setMaxReservations(e.target.value)} />
                            <label htmlFor="max_reservations">Maximum Reservations Available</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="when" type="date" className="validate" required min={date} value={when || ''} onChange={(e) => setWhen(e.target.value)} />
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
