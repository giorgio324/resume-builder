import React from 'react';
import './styles.css';
import emailIcon from '../../images/email.svg';
import phoneIcon from '../../images/phone.svg';
import watermark from '../../images/watermark.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/global.context';

const Preview = () => {
  const { privateInfo, page } = useContext(UserContext);

  return (
    <div className='result-container'>
      <img src={watermark} alt='' className='watermark' />
      <div className='private-info-result-container'>
        <div className='result-info'>
          <div className='user-name-lastName-result-container'>
            {privateInfo.name && (
              <h1 className='user-name'>{privateInfo.name}</h1>
            )}
            {privateInfo.lastName && (
              <h1 className='user-lastName'>{privateInfo.lastName}</h1>
            )}
          </div>
          <div className='user-email-phone-result-container'>
            {privateInfo.email && (
              <div className='user-email'>
                <img src={emailIcon} alt='' />
                <p>{privateInfo.email}</p>
              </div>
            )}
            {privateInfo.phoneNumber && (
              <div className='user-phone'>
                <img src={phoneIcon} alt='' />
                <p>{privateInfo.phoneNumber}</p>
              </div>
            )}
          </div>
          <div className='user-about-result-container'>
            {privateInfo.about && (
              <div>
                <h3 className='about-decoration'>ჩემს შესახებ</h3>
                <p>{privateInfo.about}</p>
              </div>
            )}
          </div>
        </div>
        <div className='result-photo'>
          {privateInfo.image && (
            <img src={privateInfo.image} className='user-img' alt='' />
          )}
        </div>
      </div>
      {page > 1 ? <div className='result-underline'></div> : ''}
    </div>
  );
};

export default Preview;
