import React from 'react';

const Meta = ({author, createdAt, updatedAt}) => (
  <ul>
     <li>Автор: {author}.</li>
     <li>Создано: {createdAt}.</li>
     <li>Обновлено: {updatedAt}</li>
  </ul>
);

export default Meta;
