import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Meta from 'components/ui/Meta.jsx';
import Like from 'components/ui/Like';

import Link from 'components/ui/shared/Link';
import { postsPath, editPostPath } from 'helpers/routes';

import { Panel, Row, Col } from 'react-bootstrap';

const BlogItem = ({post, likeClick}) => (
  <Panel>
    <Row>
      <Col md={3}>
        <Image {...post.image} />
      </Col>

      <Col md={9}>
        <Link to={postsPath(post.id)}><TextBox>{post.title}</TextBox></Link>
        <Meta {...post.meta} />
        <Like
          postId={post.id} count={post.meta.likes} onClick={likeClick}
        />
        <Link to={editPostPath(post.id)}>Edit post</Link>
      </Col>
    </Row>
  </Panel>
);

BlogItem.propTypes = {
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
  likeClick: React.PropTypes.func
};

BlogItem.defaultProps = {
  post: { meta: {} }
};

export default BlogItem;
