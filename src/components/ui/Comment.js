import React, { PropTypes } from 'react';

import { Panel, Row, Col } from 'react-bootstrap';

import Image from 'components/ui/Image';

const Comment = ({userAvatar, userName, text}) => (
  <Panel>
    <Row>
      <Col md={3}>
        <Image src={userAvatar} />
      </Col>

      <Col md={9}>
        <h3>{userName}</h3>
        <p>{text}</p>
      </Col>
    </Row>
  </Panel>
);

Comment.propTypes = {
  userAvatar: PropTypes.string,
  userName: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
