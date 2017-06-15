import React from 'react';

const Meta = ({author, createdAt, updatedAt}) => (
  <div className='meta'>
     Автор: {author}.
     <br/>
     Создано: {createdAt}.
     <br/>
     Обновлено: {updatedAt}
     <br/>
  </div>
);

export default Meta;
