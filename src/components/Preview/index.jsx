import React from 'react';
import './styles.css';
import PrivateInfoPreview from '../PrivateInfoPreview';
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
      <PrivateInfoPreview inputsInfo={inputsInfo} />
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
