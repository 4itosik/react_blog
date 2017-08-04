import React, { PropTypes } from 'react';

import Link from 'components/ui/shared/Link';
import { createCommentPath } from 'helpers/routes';

const AddComment = ({postId}) => (
  <Link to={createCommentPath(postId)}>New Comment for Post</Link>
);

AddComment.propTypes = {
  postId: PropTypes.number
};

export default AddComment;
