import React, { Component } from "react";
import Row from "./Row";
import Col from "./Col";
import CardContainer from '../Card/CardContainer';
import { Card } from "react-simple-card";
import '../Results/Bnb.css'

class Bnb extends Component {
  
  componentDidMount() {
    console.log("BNB Loaded");
  }
  
  render() {
    const { brewResults, barkResults } = this.props;
    console.log(this.props);
    return (
      <div className="container-fluid card-space">
        <Row >
          <Col size='sm-5'>
            <Card className="card-bg">
              <h3>Brew Places</h3>
              {brewResults ? 
                <CardContainer className="card-result" brewResults={brewResults} />
             : <h4></h4> }
            </Card>
          </Col>
          <Col size="sm-5">
            <Card className="card-bg">
              <h3>Bark Places</h3>
              {barkResults ?
                <CardContainer barkResults={barkResults} />
             : <h4></h4> }
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Bnb;
