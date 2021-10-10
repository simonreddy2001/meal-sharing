import React, { useState, useEffect } from 'react';
import "./Home.css"
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

        <div>
            <hr />
            <h1>Available Meals</h1>
            <p>Developed by Simon</p>
            <div>
                <input type='text' placeholder="search for meal" onChange={(e) => setSearch(e.target.value)} />
                <div className="mbsc-padding">
                    <div className="mbsc-grid">
                        <div className="mbsc-row mbsc-justify-content-center mbsc-padding">
                            {meals.map((meal) => (
                                <div className="mbsc-col-12 mbsc-col-sm-6 mbsc-col-lg-4 mbsc-col-xl-3" key={meal.id}>
                                    <div className="col s12 m4">
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={bg} alt="background-image" className="center" />

    </>
    );
};


export default Home;
