import React, { PropTypes } from 'react';

import { Pagination as BsPagination } from 'react-bootstrap';

const Pagination = ({ totalPages, currentPage, handlePagination }) => (
  <BsPagination bsSize="medium" items={totalPages}
    activePage={currentPage} onSelect={(e) => handlePagination(e)}
  />
);

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  handlePagination: PropTypes.func
};

export default Pagination;
