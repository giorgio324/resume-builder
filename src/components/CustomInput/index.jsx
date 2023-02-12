import React from 'react';
import './styles.css';
const CustomInput = ({
  htmlForName,
  label,
  type,
  placeholder,
  onChangeFunc,
  onBlurFunc,
  value,
  isTextArea,
  className,
  labelClass,
  style,
}) => {
  return (
    <>
      {isTextArea ? (
        <>
          <label htmlFor={htmlForName} className={labelClass}>
            {label}
          </label>
          <textarea
            className={className}
            name={htmlForName}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeFunc}
            onBlur={onBlurFunc}
            id={htmlForName}
            style={style}
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
            onBlur={onBlurFunc}
            id={htmlForName}
            value={value}
            style={style}
          />
        </>
      )}
    </>
  );
};

export default CustomInput;
