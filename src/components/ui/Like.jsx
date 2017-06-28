import React from 'react';
import PropTypes from 'prop-types';

import { Button, Label } from 'react-bootstrap';

const Like = ({postId, count, onClick}) => (
  <div className="text-center">
    { onClick ?
      <Button bsStyle="info" onClick={() => onClick(postId)}>Like {count}</Button>
      :
      <Label bsStyle="primary">{count}</Label>
    }
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
