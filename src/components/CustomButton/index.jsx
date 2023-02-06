import React from 'react';
import './styles.css';
const CustomButton = ({ onClickFunc, className, buttonText }) => {
  return (
    <button className={className} onClick={onClickFunc}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
