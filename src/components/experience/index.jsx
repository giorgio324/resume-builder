import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import './styles.css';
const Experience = () => {
  const { page, setPage, formik } = useContext(UserContext);

  const handleAddExperienceField = () => {
    formik.setValues({
      ...formik.values,
      experiences: [
        ...formik.values.experiences,
        {
          position: '',
          employer: '',
          start_date: '',
          due_date: '',
          description: '',
        },
      ],
    });
  };
  console.log('experience arrray', formik.errors.experiences);
  return (
    <>
      <div className='fill-form-container'>
        <div className='page-title'>
          <h1>გამოცდილება</h1>
          <p>{page}/3</p>
        </div>
        <div className='underline'></div>
        <form onSubmit={formik.handleSubmit}>
          {formik.values.experiences.map((fieldName, index) => {
            return (
              <div className='fieldes-container' key={index}>
                <div className='experience-position-input-container'>
                  <CustomInput
                    className={
                      formik.errors.experiences && formik.touched.experiences
                        ? 'unvalidated-input'
                        : formik.touched.experiences
                        ? 'validated-input'
                        : ' experience-position-input'
                    }
                    htmlForName={`experiences[${index}].position`}
                    label={'თანამდებობა'}
                    onChangeFunc={formik.handleChange}
                    placeholder={'დეველოპერი, დიზაინერი, ა.შ.'}
                    type={'text'}
                    value={fieldName.position}
                    labelClass={'position-label'}
                  />
                  <p className='hint'>მინიმუმ 2 სიმბოლო </p>
                </div>
                <div className='experience-employer-input-container'>
                  <CustomInput
                    className={' experience-employer-input'}
                    htmlForName={`experiences[${index}].employer`}
                    label={'დამსაქმებელი'}
                    onChangeFunc={formik.handleChange}
                    placeholder={'დამსაქმებელი'}
                    type={'text'}
                    value={fieldName.employer}
                    labelClass={'employer-label'}
                  />
                  <p className='hint'>მინიმუმ 2 სიმბოლო </p>
                </div>
                <div className='experience-dates-container'>
                  <div className='user-start-date-input-container'>
                    <CustomInput
                      className={' user-start-date-input'}
                      htmlForName={`experiences[${index}].start_date`}
                      label={'დაწყების რიცხვი'}
                      onChangeFunc={formik.handleChange}
                      type={'date'}
                      value={fieldName.start_date}
                      labelClass={'start-date-label'}
                    />
                  </div>
                  <div className='user-end-date-input-container'>
                    <CustomInput
                      className={' user-end-date-input'}
                      htmlForName={`experiences[${index}].due_date`}
                      label={'დამთავრების რიცხვი'}
                      onChangeFunc={formik.handleChange}
                      type={'date'}
                      value={fieldName.due_date}
                      labelClass={'end-date-label'}
                    />
                  </div>
                </div>
                <div className='experience-description-input-container'>
                  <CustomInput
                    className={' experience-description-input'}
                    htmlForName={`experiences[${index}].description`}
                    label={'აღწერა'}
                    onChangeFunc={formik.handleChange}
                    placeholder={'როლი თანამდებობაზე და ზოგადი აღწერა'}
                    type={'text'}
                    value={fieldName.description}
                    labelClass={'description-label'}
                    isTextArea
                  />
                </div>
                <div className='result-underline input-line'></div>
              </div>
            );
          })}
          <div className='add-more-experience-button-container'>
            <CustomButton
              className={'add-more'}
              type={'button'}
              buttonText={'მეტი გამოცდილების დამატება'}
              onClickFunc={handleAddExperienceField}
            ></CustomButton>
          </div>
          <div className='navigation-button-container'>
            <CustomButton
              className={'navigation-btn'}
              onClickFunc={() => setPage(page - 1)}
              type={'button'}
              buttonText={'უკან'}
            ></CustomButton>
            <CustomButton
              className={'navigation-btn'}
              type={'submit'}
              buttonText={'შემდეგი'}
            ></CustomButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Experience;
