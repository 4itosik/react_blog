import React, { PropTypes } from 'react';

import BlogItem from 'components/ui/BlogItem.jsx';
import posts from 'helpers/posts';

const Post = ({ match }) => (
  <BlogItem post={posts[match.params.id - 1]} />
);

Post.PropTypes = {
  match: React.PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string
  })
};

export default Post;
