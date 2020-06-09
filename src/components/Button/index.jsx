import React from 'react';

const Button = ({onClickBtn}) => {
  return (
    <button onClick={()=>{onClickBtn()}}>Сколько сделано?</button>
  )
}

export default Button;