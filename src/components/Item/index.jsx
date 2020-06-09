import React from 'react';
import './index.css';

const Item = ({index, changeTime, changeAl, itemName}) => {
  return (
    <>
      <li title={`Последнее изменение: ${changeTime}`}>
        <input type='checkbox' onChange={() => changeAl(index)} />
        <label>{itemName}</label>
      </li>
    </>
    )
}

export default Item;