import React from "react";

const Card = props => {
    console.log(props.name)
    return (
        <div>
            <hr />
            <div>{props.name}</div>

            {/* <div>{props.address}</div>

            <div>{props.phone}</div>

            <div>{props.website}</div> */}
        </div>
    )
}

export default Card;
