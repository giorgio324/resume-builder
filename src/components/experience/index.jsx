import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import './styles.css';
const Experience = () => {
  const { page, setPage, formik } = useContext(UserContext);

  // add fields button function
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
                    type={'text'}
                    htmlForName={`experiences[${index}].position`}
                    value={fieldName.position}
                    onChangeFunc={formik.handleChange}
                    onBlurFunc={formik.handleBlur}
                    label={'თანამდებობა'}
                    placeholder={'დეველოპერი, დიზაინერი, ა.შ.'}
                    labelClass={'position-label'}
                    className={'experience-position-input'}
                  />
                  {formik.errors.experiences &&
                    formik.errors.experiences[index] &&
                    formik.errors.experiences[index].position && <div>!</div>}
                  <p className='hint'>მინიმუმ 2 სიმბოლო </p>
                </div>
                <div className='experience-employer-input-container'>
                  <CustomInput
                    type={'text'}
                    htmlForName={`experiences[${index}].employer`}
                    value={fieldName.employer}
                    onChangeFunc={formik.handleChange}
                    onBlurFunc={formik.handleBlur}
                    label={'დამსაქმებელი'}
                    placeholder={'დამსაქმებელი'}
                    labelClass={'employer-label'}
                    className={'experience-employer-input'}
                  />
                  {formik.errors.experiences &&
                    formik.errors.experiences[index] &&
                    formik.errors.experiences[index].employer && <div>!</div>}
                  <p className='hint'>მინიმუმ 2 სიმბოლო </p>
                </div>
                <div className='experience-dates-container'>
                  <div className='user-start-date-input-container'>
                    <CustomInput
                      type={'date'}
                      htmlForName={`experiences[${index}].start_date`}
                      value={fieldName.start_date}
                      onChangeFunc={formik.handleChange}
                      onBlurFunc={formik.handleBlur}
                      label={'დაწყების რიცხვი'}
                      placeholder={'დამსაქმებელი'}
                      labelClass={'start-date-label'}
                      className={'user-start-date-input'}
                    />
                    {formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      formik.errors.experiences[index].start_date && (
                        <div>!</div>
                      )}
                  </div>
                  <div className='user-end-date-input-container'>
                    <CustomInput
                      type={'date'}
                      htmlForName={`experiences[${index}].due_date`}
                      value={fieldName.due_date}
                      onChangeFunc={formik.handleChange}
                      onBlurFunc={formik.handleBlur}
                      label={'დამთავრების რიცხვი'}
                      placeholder={'დამსაქმებელი'}
                      labelClass={'end-date-label'}
                      className={'user-end-date-input'}
                    />
                    {formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      formik.errors.experiences[index].due_date && <div>!</div>}
                  </div>
                </div>
                <div className='experience-description-input-container'>
                  <CustomInput
                    type={'text'}
                    htmlForName={`experiences[${index}].description`}
                    value={fieldName.description}
                    onChangeFunc={formik.handleChange}
                    onBlurFunc={formik.handleBlur}
                    label={'აღწერა'}
                    placeholder={'როლი თანამდებობაზე და ზოგადი აღწერა'}
                    labelClass={'description-label'}
                    className={'experience-description-input'}
                    isTextArea
                  />
                  {formik.errors.experiences &&
                    formik.errors.experiences[index] &&
                    formik.errors.experiences[index].description && (
                      <div>!</div>
                    )}
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
