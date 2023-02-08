import React from 'react';
import './styles.css';
import PrivateInfoPreview from '../PrivateInfoPreview';
import ExperiencePreview from '../ExperiencePreview';
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
      {page > 1 ? (
        <>
          <div className='result-underline'></div>
          <h2 className='result-title with-desc'>გამოცდილება</h2>
          {inputsInfo.experiences.map((field, index) => {
            return <ExperiencePreview field={field} key={index} />;
          })}
        </>
      ) : (
        ''
      )}

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
