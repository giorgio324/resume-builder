import React from 'react';
import './styles.css';
const CustomButton = ({ onClickFunc, className, buttonText, type }) => {
  return (
    <button type={type} className={className} onClick={onClickFunc}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
