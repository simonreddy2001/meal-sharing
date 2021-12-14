import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';



const OkModal = (props) => {
    React.useEffect(() => {
        if (props.show) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'initial';
        }
        return () => document.body.style.overflow = 'initial';
    }, [props.show])

    if (props.show) {
        return (
            <div style={{ zIndex: 999999, position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", backgroundColor: "rgba(0,0,0,0.8)" }}>
                <div style={{ background: "#fff", width: "50%", padding: "1em", margin: "10% auto" }}>

                    <div className="card-panel teal lighten-2 ">
                        <h4>SUCCESS</h4>
                        <p>Added your {props.data} successfully</p>
                    </div>
                    <div className="modal-footer">
                        <a href={props.link} className="blue-text text-darken-2">OK</a>
                    </div>

                </div>

            </div>
        )
    }
    return null
}


export default OkModal;

