import React from 'react';

const CustomInput = ({
  htmlForName,
  label,
  type,
  placeholder,
  onChangeFunc,
  value,
  isTextArea,
  className,
  labelClassFor,
  id,
}) => {
  return (
    <>
      {isTextArea ? (
        <>
          <label
            htmlFor={htmlForName}
            className={`user-${labelClassFor}-input-label`}
          >
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
          <label
            htmlFor={htmlForName}
            className={`user-${labelClassFor}-input-label`}
          >
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
