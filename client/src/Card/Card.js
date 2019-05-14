import React from "react";

const Card = props => {
    return (
        <div>
            <hr />
            <div>{props.title}</div>

            <div>{props.address}</div>

            <div>{props.phone}</div>

            <div>{props.website}</div>
        </div>
    )
}

export default Card;
