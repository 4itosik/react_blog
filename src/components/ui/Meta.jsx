import React from 'react';
import PropTypes from 'prop-types';

const Meta = ({author, createdAt, updatedAt}) => (
  <ul>
    <li>Автор: {author}.</li>
    <li>Создано: {createdAt}.</li>
    <li>Обновлено: {updatedAt}</li>
  </ul>
);

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

export default Meta;
