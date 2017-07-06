import React, { PropTypes } from 'react';

import BlogItem from 'components/ui/BlogItem.js';

const Post = ({post, likeClick}) => {
  if (post) {
    return <BlogItem post={post} likeClick={likeClick}/>;
  }
  return false;
};

Post.propTypes = {
  post: React.PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string
  }),
  likeClick: PropTypes.func
};

export default Post;
