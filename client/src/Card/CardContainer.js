import React from "react";
import Card from './Card';

const CardContainer = props => (

    <div>
        {props.brewresults && props.brewresults.map(card => (
            <Card {...card} />
        ))}
        {props.barkresults && props.barkresults.map(card => (
            <Card {...card} />
        ))}
    </div>
)

export default CardContainer;