import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Createmeal = () => {
    return (
        <div>
            <Navbar />
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="description" type="text" className="validate" />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="location" type="text" className="validate" />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="price" type="number" className="validate" min="1" />
                            <label htmlFor="price">Price</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="max_reservations" type="number" className="validate" min="1" />
                            <label htmlFor="max_reservations">Maximum Reservations Available</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="when" type="datetime" className="validate" />
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
