import React, { useState } from 'react';
import './styles.css';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import emailIcon from '../../images/email.svg';
import phoneIcon from '../../images/phone.svg';
import closePopupimg from '../../images/closePopup.svg';
const FinalPage = () => {
  const [closePopup, setClosePopup] = useState(false);
  const { fetchedData } = useContext(UserContext);
  if (!fetchedData) return null;
  return (
    <div className='final-resume-container'>
      {!closePopup ? (
        <div className='pop-up'>
          <div className='container-pop-up'>
            <h2>რეზიუმე წარმატებით გაიგზავნა 🎉</h2>
            <button onClick={() => setClosePopup(true)}>
              <img src={closePopupimg} alt='' className='close-pop-up' />
            </button>
          </div>
        </div>
      ) : (
        ''
      )}

      <div className='private-info-result-container'>
        <div className='result-info'>
          <div className='user-name-lastName-result-container'>
            <h1 className='user-name'>{fetchedData.name}</h1>
            <h1 className='user-lastName'>{fetchedData.surname}</h1>
          </div>
          <div className='user-email-phone-result-container'>
            {fetchedData.email && (
              <div className='user-email'>
                <img src={emailIcon} alt='' />
                <p>{fetchedData.email}</p>
              </div>
            )}
            {fetchedData.phone_number && (
              <div className='user-phone'>
                <img src={phoneIcon} alt='' />
                <p>
                  {fetchedData.phone_number.slice(0, 4) +
                    ' ' +
                    fetchedData.phone_number.slice(4, 7) +
                    ' ' +
                    fetchedData.phone_number.slice(7, 9) +
                    ' ' +
                    fetchedData.phone_number.slice(9, 11) +
                    ' ' +
                    fetchedData.phone_number.slice(11, 13)}
                </p>
              </div>
            )}
          </div>
          <div className='user-about-result-container'>
            {fetchedData.about_me && (
              <div>
                <h3 className='result-title'>ჩემ შესახებ</h3>
                <p>{fetchedData.about_me}</p>
              </div>
            )}
          </div>
        </div>
        <div className='result-photo'>
          {fetchedData.image && (
            <img
              src={`https://resume.redberryinternship.ge${fetchedData.image}`}
              className='user-img'
              alt=''
            />
          )}
        </div>
      </div>
      <div className='result-underline'></div>
      <h2 className='result-title with-desc'>გამოცდილება</h2>
      {fetchedData
        ? fetchedData?.experiences?.map((field, index) => {
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
        : null}
      <div className='result-underline'></div>
      <h2 className='result-title with-desc'>განათლება</h2>
      {fetchedData
        ? fetchedData?.educations?.map((field, index) => {
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
        : null}
    </div>
  );
};

export default FinalPage;
