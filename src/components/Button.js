// components/common/Button.js
import React from 'react';

const Button = ({ text, onClick, className = '', type = 'button' }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
