import React, { DOM } from 'react';
import PropTypes from 'prop-types';

const TextBox = ({children}) => (
  DOM.span(
    {},
    <h3 className="text-center">{children}</h3>
  )
);

TextBox.propTypes = {
  children: PropTypes.string.isRequired
};

TextBox.defaultProps = {
  children: 'Default post text'
};

export default TextBox;
