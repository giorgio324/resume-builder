import React from 'react';
import './styles.css';
const EducationPreview = ({ field, degreeList }) => {
  return (
    <div className='result-education-container'>
      <div className='result-learn-container'>
        <div className='result-education-institute'>
          <p>{field.institute}</p>
        </div>
        <div className='result-education-degree'>
          <p>
            {degreeList[field.degree_id - 1]
              ? degreeList[field.degree_id - 1].title
              : ''}
          </p>
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
};

export default EducationPreview;
