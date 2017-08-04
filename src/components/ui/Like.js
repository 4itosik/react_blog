import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const Like = ({postId, count, onClick}) => (
  <div className="text-center">
    <Button bsStyle="info" onClick={() => onClick(postId)}>
      Like
      <div className="like-count">{count}</div>
    </Button>
  </div>
);

Like.propTypes = {
  postId: PropTypes.number,
  count: PropTypes.number,
  onClick: PropTypes.func
};

Like.defaultProps = {
  count: 0
};

export default Like;
