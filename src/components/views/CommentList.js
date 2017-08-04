import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import { camelizeKeys } from 'humps';

import Comment from 'components/ui/Comment';

const CommentList = ({comments}) => (
  <div>
    {
      map(camelizeKeys(comments), (comment) =>
        <Comment {...comment} key={comment.id} />
      )
    }
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.array
};

export default CommentList;
