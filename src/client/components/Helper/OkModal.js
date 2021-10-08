import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import './Modal.css';

const OkModal = () => {
    useEffect(() => {
        const a = document.getElementById('asd')
        a.addEventListener('click', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });

    }, []);
    return (
        <>
            {/* <button className="btn modal-trigger" data-target="modal1" id="asd" type="submit">{props.value}</button> */}


            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <Link to="/" className="modal-close waves-effect waves-green btn-flat">Agree</Link>
                </div>
            </div>
        </>
    );
}

export default OkModal;

