import React, { Component } from "react";
import Card from './Card';

class CardContainer extends Component {

    render() {
        const { brewResults, barkResults } = this.props;
        console.log("Card container hit.");
        console.log(brewResults);
        return (
            <div>
                {brewResults && brewResults.map((card, i) => (
                    <Card key={i} {...card} />

                ))}
                {barkResults && barkResults.map((card, i) => (
                    <Card key={i} {...card} />
                ))}
            </div>
        )
    }
}

export default CardContainer;