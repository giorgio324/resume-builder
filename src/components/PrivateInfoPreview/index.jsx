import React from 'react';
import './styles.css';
import emailIcon from '../../images/email.svg';
import phoneIcon from '../../images/phone.svg';
const PrivateInfoPreview = ({ formik }) => {
  return (
    <div className='private-info-result-container'>
      <div className='result-info'>
        <div className='user-name-lastName-result-container'>
          <h1 className='user-name'>{formik.values.name}</h1>
          <h1 className='user-lastName'>{formik.values.surname}</h1>
        </div>
        <div className='user-email-phone-result-container'>
          {formik.values.email && (
            <div className='user-email'>
              <img src={emailIcon} alt='' />
              <p>{formik.values.email}</p>
            </div>
          )}
          {formik.values.phone_number && (
            <div className='user-phone'>
              <img src={phoneIcon} alt='' />
              <p>
                {formik.values.phone_number.slice(0, 4) +
                  ' ' +
                  formik.values.phone_number.slice(4, 7) +
                  ' ' +
                  formik.values.phone_number.slice(7, 9) +
                  ' ' +
                  formik.values.phone_number.slice(9, 11)}
              </p>
            </div>
          )}
        </div>
        <div className='user-about-result-container'>
          {formik.values.about_me && (
            <div>
              <h3 className='result-title'>ჩემ შესახებ</h3>
              <p>{formik.values.about_me}</p>
            </div>
          )}
        </div>
      </div>
      <div className='result-photo'>
        {formik.values.image && (
          <img src={formik.values.image} className='user-img' alt='' />
        )}
      </div>
    </div>
  );
};

export default PrivateInfoPreview;
