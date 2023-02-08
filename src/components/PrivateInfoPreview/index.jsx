import React from 'react';
import './styles.css';
import emailIcon from '../../images/email.svg';
import phoneIcon from '../../images/phone.svg';
const PrivateInfoPreview = ({ inputsInfo }) => {
  return (
    <div className='private-info-result-container'>
      <div className='result-info'>
        <div className='user-name-lastName-result-container'>
          <h1 className='user-name'>{inputsInfo.name}</h1>
          <h1 className='user-lastName'>{inputsInfo.surname}</h1>
        </div>
        <div className='user-email-phone-result-container'>
          {inputsInfo.email && (
            <div className='user-email'>
              <img src={emailIcon} alt='' />
              <p>{inputsInfo.email}</p>
            </div>
          )}
          {inputsInfo.phone_number && (
            <div className='user-phone'>
              <img src={phoneIcon} alt='' />
              <p>{inputsInfo.phone_number}</p>
            </div>
          )}
        </div>
        <div className='user-about-result-container'>
          {inputsInfo.about_me && (
            <div>
              <h3 className='result-title'>ჩემ შესახებ</h3>
              <p>{inputsInfo.about_me}</p>
            </div>
          )}
        </div>
      </div>
      <div className='result-photo'>
        {inputsInfo.image && (
          <img src={inputsInfo.image} className='user-img' alt='' />
        )}
      </div>
    </div>
  );
};

export default PrivateInfoPreview;
