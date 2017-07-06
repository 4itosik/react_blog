import React, { PropTypes } from 'react';

import BlogList from 'containers/BlogListContainer';
import ChartContainer from 'containers/ChartContainer';
import PaginationContainer from 'containers/PaginationContainer';
import SearchFormContainer from 'containers/SearchFormContainer';

import { Row, Col } from 'react-bootstrap';

const BlogPage = ({ posts, currentPage, per }) => {
  const getPaginatedPosts = () => {
    const skip = (currentPage - 1) * per;

    return posts.slice(skip, skip + per);
  };

  return (
    <Row>
      <Col md={8}>
        <BlogList posts={getPaginatedPosts()}/>

        <PaginationContainer />
      </Col>

      <Col md={4}>
        <SearchFormContainer />

        <ChartContainer />
      </Col>
    </Row>
  );
};

BlogPage.propTypes = {
  posts: PropTypes.array,
  currentPage: PropTypes.number,
  per: PropTypes.number
};

export default BlogPage;
