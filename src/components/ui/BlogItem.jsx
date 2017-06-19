import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Meta from 'components/ui/Meta.jsx';
import Like from 'components/ui/Like.jsx';

const BlogItem = ({post, incrementLikeCount}) => (
  <div className='col-sm-4'>
    <Image {...post.image} />
    <TextBox>{post.text}</TextBox>
    <Meta {...post.meta} />
    <Like postId={post.id} count={post.meta.likeCount} incrementLikeCount={incrementLikeCount} />
  </div>
);

BlogItem.propTypes = {
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
  incrementLikeCount: React.PropTypes.func
};

export default BlogItem;