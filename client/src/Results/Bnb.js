import React from "react";
import Row from "./Row";
import Col from "./Col";
import ResultsCard from '../Card/CardContainer';
// import CardContainer from '../Card/CardCotainer';

import { Card } from "react-simple-card";

const Bnb = ( props ) => (
  <div className="container-fluid>">
    <Row >
      <Col size='sm-6'>
        <Card>
          <h1>Brews</h1>
          {props.brewresults&&
          <ResultsCard brewresults={props.brewresults}/>
          }
        </Card>
      </Col>
      <Col size="sm-6">
        <Card>
        <h1>Barks</h1>
        {props.barkresults&&
          <ResultsCard barkresults={props.barkresults}/>
        }
        </Card>
      </Col>
    </Row>
  </div>
)

export default Bnb;
