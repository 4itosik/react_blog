import React, { PropTypes } from 'react';

import Image from 'components/ui/Image';
import BlogItem from 'components/views/BlogItem';

const Post = ({post, likeClick}) => {
  if (post) {
    return <BlogItem post={post} likeClick={likeClick}/>;
  }
  return false;
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    meta: PropTypes.shape({
      author: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      likes: PropTypes.number
    }),
    image: PropTypes.shape(Image.propTypes)
  }),
  likeClick: PropTypes.func
};

export default Post;
