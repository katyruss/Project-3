import React, { Component } from "react";
import Row from "./Row";
import Col from "./Col";
import CardContainer from '../Card/CardContainer';
import { Card } from "react-simple-card";

class Bnb extends Component {
  
  componentDidMount() {
    console.log("BNB Loaded");
  }
  
  render() {
    const { brewresults, barkresults } = this.props;
    console.log(this.props);
    return (
      <div className="container-fluid>">
        <Row >
          <Col size='sm-6'>
            <Card>
              <h3>Brews</h3>
              {brewresults &&
                <CardContainer brewresults={brewresults} />
              }
            </Card>
          </Col>
          <Col size="sm-6">
            <Card>
              <h3>Barks</h3>
              {barkresults &&
                <CardContainer barkresults={barkresults} />
              }
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Bnb;
