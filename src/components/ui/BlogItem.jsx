import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Meta from 'components/ui/Meta.jsx';
import Like from 'components/ui/Like.jsx';

import Link from 'components/ui/shared/Link';
import { postsPath } from 'helpers/routes/index';

import { Panel, Row, Col } from 'react-bootstrap';

const BlogItem = ({post, incrementLikeCount}) => (
  <Panel>
    <Row>

      <Col md={3}>
        <Image {...post.image} />
      </Col>

      <Col md={9}>
        <Link to={postsPath(post.id)}><TextBox>{post.text}</TextBox></Link>
        <Meta {...post.meta} />
        <Like
          postId={post.id} count={post.meta.likeCount} incrementLikeCount={incrementLikeCount}
        />
      </Col>
    </Row>
  </Panel>

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
