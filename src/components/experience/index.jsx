import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import validatedPassedIcon from '../../images/validationPassed.svg';
import validatedFailedIcon from '../../images/validationFailed.svg';
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
                    className={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      formik.errors.experiences[index].position &&
                      formik.touched.experiences &&
                      formik.touched.experiences[index] &&
                      formik.touched.experiences[index].position
                        ? 'unvalidated-input'
                        : formik.touched.experiences &&
                          formik.touched.experiences[index] &&
                          formik.touched.experiences[index].position
                        ? 'validated-input'
                        : 'experience-position-input'
                    }
                  />
                  {formik.errors.experiences &&
                  formik.errors.experiences[index] &&
                  formik.errors.experiences[index].position &&
                  formik.touched.experiences &&
                  formik.touched.experiences[index] &&
                  formik.touched.experiences[index].position ? (
                    <img
                      src={validatedFailedIcon}
                      draggable={false}
                      className={'unvalidated-icon'}
                      alt=''
                    />
                  ) : formik.touched.experiences &&
                    formik.touched.experiences[index] &&
                    formik.touched.experiences[index].position ? (
                    <img
                      src={validatedPassedIcon}
                      draggable={false}
                      className={'validated-icon'}
                      alt=''
                    />
                  ) : (
                    ''
                  )}

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
                    className={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      formik.errors.experiences[index].employer &&
                      formik.touched.experiences &&
                      formik.touched.experiences[index] &&
                      formik.touched.experiences[index].employer
                        ? 'unvalidated-input'
                        : formik.touched.experiences &&
                          formik.touched.experiences[index] &&
                          formik.touched.experiences[index].employer
                        ? 'validated-input'
                        : 'experience-employer-input'
                    }
                  />
                  {formik.errors.experiences &&
                  formik.errors.experiences[index] &&
                  formik.errors.experiences[index].employer &&
                  formik.touched.experiences &&
                  formik.touched.experiences[index] &&
                  formik.touched.experiences[index].employer ? (
                    <img
                      src={validatedFailedIcon}
                      draggable={false}
                      className={'unvalidated-icon'}
                      alt=''
                    />
                  ) : formik.touched.experiences &&
                    formik.touched.experiences[index] &&
                    formik.touched.experiences[index].employer ? (
                    <img
                      src={validatedPassedIcon}
                      draggable={false}
                      className={'validated-icon'}
                      alt=''
                    />
                  ) : (
                    ''
                  )}
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
                      labelClass={'start-date-label'}
                      className={
                        formik.errors.experiences &&
                        formik.errors.experiences[index] &&
                        formik.errors.experiences[index].start_date &&
                        formik.touched.experiences &&
                        formik.touched.experiences[index] &&
                        formik.touched.experiences[index].start_date
                          ? 'unvalidated-input'
                          : formik.touched.experiences &&
                            formik.touched.experiences[index] &&
                            formik.touched.experiences[index].start_date
                          ? 'validated-input'
                          : 'user-start-date-input'
                      }
                    />
                  </div>
                  <div className='user-end-date-input-container'>
                    <CustomInput
                      type={'date'}
                      htmlForName={`experiences[${index}].due_date`}
                      value={fieldName.due_date}
                      onChangeFunc={formik.handleChange}
                      onBlurFunc={formik.handleBlur}
                      label={'დამთავრების რიცხვი'}
                      labelClass={'end-date-label'}
                      className={
                        formik.errors.experiences &&
                        formik.errors.experiences[index] &&
                        formik.errors.experiences[index].due_date &&
                        formik.touched.experiences &&
                        formik.touched.experiences[index] &&
                        formik.touched.experiences[index].due_date
                          ? 'unvalidated-input'
                          : formik.touched.experiences &&
                            formik.touched.experiences[index] &&
                            formik.touched.experiences[index].due_date
                          ? 'validated-input'
                          : 'user-end-date-input'
                      }
                    />
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
                    className={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      formik.errors.experiences[index].description &&
                      formik.touched.experiences &&
                      formik.touched.experiences[index] &&
                      formik.touched.experiences[index].description
                        ? 'unvalidated-input'
                        : formik.touched.experiences &&
                          formik.touched.experiences[index] &&
                          formik.touched.experiences[index].description
                        ? 'validated-input'
                        : 'experience-description-input'
                    }
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
