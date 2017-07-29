import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import Image from 'components/ui/Image';
import BlogItem from 'components/views/BlogItem';

const Post = ({post, likeClick}) => (
  <div>
    { post && <BlogItem post={post} likeClick={likeClick}/> }
    { post &&
      <Helmet
        title={post.title} meta={[
          { name: 'description', content: post.title },
          { name: 'keywords', content: post.title }
        ]}
        keywords={post.text}
        description={post.text}
      />
    }
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
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
