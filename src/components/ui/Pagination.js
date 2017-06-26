import React, { PropTypes } from 'react';
import _ from 'lodash';

import { Pagination as BsPagination } from 'react-bootstrap';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activePage: 1 };
    this.handleSelect = _.bind(this.handleSelect, this);
  }

  handleSelect(eventKey) {
    this.props.handlePagination(eventKey);

    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <BsPagination bsSize="medium" items={this.props.items}
        activePage={this.state.activePage} onSelect={this.handleSelect}
      />
    );
  }
}

Pagination.propTypes = {
  items: PropTypes.number,
  handlePagination: PropTypes.func
};

export default Pagination;
