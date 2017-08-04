import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import Image from 'components/ui/Image';
import BlogItem from 'components/views/BlogItem';
import CommentList from 'components/views/CommentList';
import AddComment from 'components/ui/AddComment';


const Post = ({post, likeClick}) => (
  <div>
    { post && <BlogItem post={post} likeClick={likeClick} /> }
    { post && <AddComment postId={post.id} /> }
    { post && <CommentList comments={post.comments} /> }

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
    image: PropTypes.shape(Image.propTypes),
    comments: PropTypes.array
  }),
  likeClick: PropTypes.func
};

export default Post;
