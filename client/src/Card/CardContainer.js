import React, { Component } from "react";
import Card from './Card';

class CardContainer extends Component {

    render() {
        const { brewresults, barkresults } = this.props;
        console.log("Card container hit.");
        console.log(brewresults);
        return (
            <div>
                {brewresults && brewresults.map(card => (
                    <Card {...card} />
                ))}
                {barkresults && barkresults.map(card => (
                    <Card {...card} />
                ))}
            </div>
        )
    }
}

export default CardContainer;