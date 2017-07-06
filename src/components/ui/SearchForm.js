import React, { PropTypes } from 'react';
import _ from 'lodash';

import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.onSubmit = _.bind(this.onSubmit, this);
    this.handleSearchValue = _.bind(this.handleSearchValue, this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.submitForm(this.state.text);
  }

  handleSearchValue(e) {
    this.setState({ text: e.currentTarget.value });
  }

  render() {
    return (
      <Panel>
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="searchText" >
            <ControlLabel>Поиск статей</ControlLabel>
            <FormControl
              type="text" placeholder="Введите название"
              value={this.state.value} onChange={this.handleSearchValue}
            />
          </FormGroup>

          <Button type="submit">
            Поиск
          </Button>
        </form>
      </Panel>
    );
  }
}

SearchForm.propTypes = {
  submitForm: PropTypes.func
};

export default SearchForm;
