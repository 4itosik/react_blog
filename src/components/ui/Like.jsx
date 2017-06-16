import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const Like = ({post_id, count, incrementLikeCount}) => (
  <div className="text-center">
    <Button bsStyle="info" onClick={() => incrementLikeCount(post_id)}>Like {count}</Button>
  </div>
)

Like.propTypes = {
  count: PropTypes.number
}

Like.defaultProps = {
  count: 0
}

export default Like;
