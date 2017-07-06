import React, { PropTypes } from 'react';

import { Pagination as BsPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, countItems, countItemsOnPage, handlePagination }) => {
  const calcCountPages = () => (
    Math.ceil((countItems / countItemsOnPage))
  );

  return (
    <BsPagination bsSize="medium" items={calcCountPages()}
      activePage={currentPage} onSelect={(e) => handlePagination(e)}
    />
  );
};

Pagination.propTypes = {
  countItems: PropTypes.number,
  currentPage: PropTypes.number,
  countItemsOnPage: PropTypes.number,
  handlePagination: PropTypes.func
};

export default Pagination;
