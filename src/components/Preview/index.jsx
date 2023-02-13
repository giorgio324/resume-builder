import React from 'react';
import './styles.css';
import PrivateInfoPreview from '../PrivateInfoPreview';
import ExperiencePreview from '../ExperiencePreview';
import EducationPreview from '../EducationPreview';
import watermark from '../../images/watermark.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/global.context';

const Preview = () => {
  const { page, formik, degreeList } = useContext(UserContext);

  return (
    <div
      className={
        page === 4 ? 'result-container result-finish' : 'result-container'
      }
    >
      <img src={watermark} alt='' className='watermark' />
      <PrivateInfoPreview formik={formik} />
      {page > 1 ? (
        <>
          <div className='result-underline'></div>
          <h2 className='result-title with-desc'>გამოცდილება</h2>
          {formik.values.experiences.map((field, index) => {
            return <ExperiencePreview field={field} key={index} />;
          })}
        </>
      ) : (
        ''
      )}

      {page > 2 ? (
        <>
          <div className='result-underline'></div>
          <h2 className='result-title with-desc'>განათლება</h2>
          {formik.values.educations.map((field, index) => {
            return (
              <EducationPreview
                field={field}
                degreeList={degreeList}
                key={index}
              />
            );
          })}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Preview;
