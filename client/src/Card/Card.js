import React from "react";
import "../Card/Card.css";


const Card = props => {
    console.log(props.name)
    return (
        <div>
            <hr />
            {/* {
                localStorage.hasOwnProperty('isLoggedIn') ? <button><i className="fas fa-heart"></i></button> : null
            } */}
            <button type = "submit"><i className="fas fa-heart heart-icon"></i></button>
            <div className="card-result">Name: {props.name}</div>

            <div className="card-result">Address: {props.vicinity}</div>

            <div className="card-result">Rating: {props.rating}</div>

            <div className="card-result">Open Now: {(props.open_now) ? 'Open Now' : 'Not Open Now'}</div>
        </div>
    )
}
export default Card;

