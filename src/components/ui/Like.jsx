import React from 'react';
import PropTypes from 'prop-types';

import { Button, Label } from 'react-bootstrap';

const Like = ({postId, count, incrementLikeCount}) => (
  <div className="text-center">
    { incrementLikeCount ?
      <Button bsStyle="info" onClick={() => incrementLikeCount(postId)}>Like {count}</Button>
      :
      <Label bsStyle="primary">{count}</Label>
    }
  </div>
);

Like.propTypes = {
  postId: PropTypes.number,
  count: PropTypes.number,
  incrementLikeCount: PropTypes.func
};

Like.defaultProps = {
  count: 0
};

export default Like;
