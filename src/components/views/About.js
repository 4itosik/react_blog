import React from 'react';

import { Row, Col, Jumbotron } from 'react-bootstrap';

const About = () => (
  <Row>
    <Col sm={12}>
      <Jumbotron>
        <h1>Hello, in React Block!</h1>

        <p>
          This is a simple hero unit, a simple jumbotron-style
          component for calling extra attention
          to featured content or information.
        </p>
      </Jumbotron>
    </Col>
  </Row>
);

export default About;
