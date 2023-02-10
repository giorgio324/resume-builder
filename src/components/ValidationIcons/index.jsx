import React from 'react';
import './styles.css';
import validatedPassedIcon from '../../images/validationPassed.svg';
import validatedFailedIcon from '../../images/validationFailed.svg';
const ValidationIcons = ({ formik, iconFor }) => {
  return (
    <>
      {formik.errors[iconFor] && formik.touched[iconFor] ? (
        <img
          src={validatedFailedIcon}
          draggable={false}
          className={'unvalidated-icon'}
          alt=''
        />
      ) : (
        ''
      )}
      {!formik.errors[iconFor] && formik.touched[iconFor] ? (
        <img
          src={validatedPassedIcon}
          draggable={false}
          className={'validated-icon'}
          alt=''
        />
      ) : (
        ''
      )}
    </>
  );
};

export default ValidationIcons;
