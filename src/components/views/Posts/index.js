import React, { PropTypes } from 'react';

import BlogList from 'containers/BlogListContainer';
import ChartContainer from 'containers/ChartContainer';
import PaginationContainer from 'containers/PaginationContainer';
import SearchFormContainer from 'containers/SearchFormContainer';

import { Row, Col } from 'react-bootstrap';

const BlogPage = ({ posts }) => (
  <Row>
    <Col md={8}>
      <BlogList posts={posts}/>

      <PaginationContainer />
    </Col>

    <Col md={4}>
      <SearchFormContainer />

      <ChartContainer />
    </Col>
  </Row>
);

BlogPage.propTypes = {
  posts: PropTypes.array
};

export default BlogPage;
