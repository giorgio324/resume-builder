import React from 'react';
import './styles.css';
import emailIcon from '../../images/email.svg';
import phoneIcon from '../../images/phone.svg';
import watermark from '../../images/watermark.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/global.context';

const Preview = () => {
  const { inputsInfo, page } = useContext(UserContext);

  return (
    <div
      className={
        page === 4 ? 'result-container result-finish' : 'result-container'
      }
    >
      <img src={watermark} alt='' className='watermark' />
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
      {page > 1 ? <div className='result-underline'></div> : ''}
      {page > 1 ? <h2 className='result-title with-desc'>გამოცდილება</h2> : ''}
      {page > 1
        ? inputsInfo.experiences.map((field, index) => {
            return (
              <div className='result-experience-container' key={index}>
                <div className='result-job-container'>
                  <div className='result-experience-position'>
                    <p>{field.position}</p>
                  </div>
                  <div className='result-employer-position'>
                    {field.employer}
                  </div>
                </div>
                <div className='result-duration-container'>
                  <div className='result-experience-startDate'>
                    <p>{field.start_date}</p>
                  </div>
                  {field.start_date && field.due_date && (
                    <p className='dash'>-</p>
                  )}
                  <div className='result-experience-endDate'>
                    <p>{field.due_date}</p>
                  </div>
                </div>
                <div className='result-description-container'>
                  <div className='result-experience-description'>
                    <p>{field.description}</p>
                  </div>
                </div>
              </div>
            );
          })
        : ''}

      {page > 2 ? <div className='result-underline'></div> : ''}
      {page > 2 ? <h2 className='result-title with-desc'>განათლება</h2> : ''}
      {page > 2
        ? inputsInfo.educations.map((field, index) => {
            return (
              <div className='result-education-container' key={index}>
                <div className='result-learn-container'>
                  <div className='result-education-institute'>
                    <p>{field.institute}</p>
                  </div>
                  <div className='result-education-degree'>
                    <p>{field.degree}</p>
                  </div>
                </div>
                <div className='result-education-endDate'>
                  <p>{field.due_date}</p>
                </div>
                <div className='result-education-description'>
                  <p>{field.description}</p>
                </div>
              </div>
            );
          })
        : ''}
    </div>
  );
};

export default Preview;
