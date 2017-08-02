import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import { map } from 'lodash/collection';

import { camelizeKeys } from 'humps';

import Image from 'components/ui/Image';
import BlogItem from 'components/views/BlogItem';
import Comment from 'components/ui/Comment';

import Link from 'components/ui/shared/Link';
import { createCommentPath } from 'helpers/routes';

const Post = ({post, likeClick}) => (
  <div>
    { post && <BlogItem post={post} likeClick={likeClick}/> }

    { post && <Link to={createCommentPath(post.id)}>New Comment for Post</Link> }

    { post &&
      <div>
        {
          map(camelizeKeys(post.comments), (comment) =>
            <Comment {...comment} key={comment.id} />
          )
        }
      </div>
    }

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
