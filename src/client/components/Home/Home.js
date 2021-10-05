import React, { useState, useEffect } from 'react';
import "./Home.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import bg from './../../assets/images/bg.png'

const Home = (props) => {
    const [search, setSearch] = useState("")
    const [meals, setMeals] = useState([])
    useEffect(() => {
        if (search) {
            fetch(`/api/meals?title=${search}`)
                .then(res => res.json())
                .then(data => {
                    setMeals(data)
                })
        }
    }, [search])

    return (<>
        <Navbar />
        <div>
            <hr />
            <img src={bg} alt="background-image" className="center" />
            <h1>Available Meals</h1>
            <p>Developed by Simon</p>
            <div>
                <input type='text' placeholder="search for meal" onChange={(e) => setSearch(e.target.value)} />

                <ul>
                    {meals.map((meal) => (
                        <li key={meal.id}>
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">{meal.title}</span>
                                            <p>{meal.description}</p>
                                        </div>
                                        <div className="card-action">
                                            <Link to={`/meals/${meal.id}`}>Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Footer />
    </>
    );
};


export default Home;
