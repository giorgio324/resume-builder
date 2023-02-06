import React from 'react';
import './styles.css';
const CustomInput = ({
  htmlForName,
  label,
  type,
  placeholder,
  onChangeFunc,
  value,
  isTextArea,
  className,
  labelClass,
  id,
}) => {
  return (
    <>
      {isTextArea ? (
        <>
          <label htmlFor={htmlForName} className={labelClass}>
            {label}
          </label>
          <textarea
            name={htmlForName}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeFunc}
          />
        </>
      ) : (
        <>
          <label htmlFor={htmlForName} className={labelClass}>
            {label}
          </label>
          <input
            className={className}
            type={type}
            name={htmlForName}
            placeholder={placeholder}
            onChange={onChangeFunc}
            id={id}
            value={value}
          />
        </>
      )}
    </>
  );
};

export default CustomInput;
