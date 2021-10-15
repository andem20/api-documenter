import React from 'react'
import './button.css';

function Button({value, color, onClick}) {
   return (
      <button className={ 'button-' + color } onClick={ onClick }>
         { value }
      </button>
   )
}

export default Button
