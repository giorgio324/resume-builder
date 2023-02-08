import React from 'react';
import './styles.css';
const ExperiencePreview = ({ field }) => {
  return (
    <div className='result-experience-container'>
      <div className='result-job-container'>
        <div className='result-experience-position'>
          <p>{field.position}</p>
        </div>
        <div className='result-employer-position'>{field.employer}</div>
      </div>
      <div className='result-duration-container'>
        <div className='result-experience-startDate'>
          <p>{field.start_date}</p>
        </div>
        {field.start_date && field.due_date && <p className='dash'>-</p>}
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
};

export default ExperiencePreview;
