import React from 'react'
import './Button.css';

function Button({value, color, onClick}) {
   return (
      <button className={ 'button button-' + color } onClick={ onClick }>
         { value }
      </button>
   )
}

export default Button
