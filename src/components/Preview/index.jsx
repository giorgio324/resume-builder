import React from 'react';
import './styles.css';
import emailIcon from '../../images/email.svg';
import phoneIcon from '../../images/phone.svg';
import watermark from '../../images/watermark.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/global.context';

const Preview = () => {
  // todo display experience page content
  const { privateInfo, experienceInfo, page } = useContext(UserContext);

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
      {page > 1 ? <h2 className='result-experience-title'>გამოცდილება</h2> : ''}
      {experienceInfo.map((fields, index) => {
        return (
          <div className='result-experience-container' key={index}>
            <div className='result-job-container'>
              <div className='result-experience-position'>
                <p>{fields.position}</p>
              </div>
              <div className='result-employer-position'>{fields.employer}</div>
            </div>
            <div className='result-duration-container'>
              <div className='result-experience-startDate'>
                <p>{fields.startDate}</p>
              </div>
              {fields.startDate && fields.endDate && <p className='dash'>-</p>}
              <div className='result-experience-endDate'>
                <p>{fields.endDate}</p>
              </div>
            </div>
            <div className='result-description-container'>
              <div className='result-experience-description'>
                <p>{fields.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
