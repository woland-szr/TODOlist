import React from 'react';
import './index.css';

const Item = ({id, changeTime, changeAl, itemName}) => {
  return (
      <li title={`Последнее изменение: ${changeTime}`}>
        <input type='checkbox' onChange={() => changeAl(id)} />
        <label>{itemName}</label>
      </li>
    )
}

export default Item;