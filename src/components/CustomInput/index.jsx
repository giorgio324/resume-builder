import React from 'react';

const CustomInput = ({
  htmlForName,
  label,
  type,
  placeholder,
  onChangeFunc,
  value,
  isTextArea,
}) => {
  return (
    <>
      <label htmlFor={htmlForName} className='user-name-input-label'>
        {label}
      </label>
      <input
        type={type}
        name={htmlForName}
        placeholder={placeholder}
        onChange={onChangeFunc}
        value={value}
      />
    </>
  );
};

export default CustomInput;
