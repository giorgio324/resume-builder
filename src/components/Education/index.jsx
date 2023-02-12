import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/global.context';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import validatedPassedIcon from '../../images/validationPassed.svg';
import validatedFailedIcon from '../../images/validationFailed.svg';
import './styles.css';
const Education = () => {
  const { page, setPage, formik } = useContext(UserContext);
  const [degreeList, setDegreeList] = useState([]);
  const handleAddEducationField = () => {
    formik.setValues({
      ...formik.values,
      educations: [
        ...formik.values.educations,
        {
          institute: '',
          degree: '',
          due_date: '',
          description: '',
        },
      ],
    });
  };
  // fetch degree list from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://resume.redberryinternship.ge/api/degrees'
        );
        const responseData = await response.json();
        setDegreeList(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className='fill-form-container'>
        <div className='page-title'>
          <h1>განათლება</h1>
          <p>{page}/3</p>
        </div>
        <div className='underline'></div>
        <form onSubmit={formik.handleSubmit}>
          {formik.values.educations.map((fieldName, index) => {
            return (
              <div className='fieldes-container' key={index}>
                <div className='education-institute-input-container'>
                  <CustomInput
                    type={'text'}
                    htmlForName={`educations[${index}].institute`}
                    value={fieldName.institute}
                    onChangeFunc={formik.handleChange}
                    onBlurFunc={formik.handleBlur}
                    label={'სასწავლებელი'}
                    placeholder={'სასწავლებელი'}
                    labelClass={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      formik.errors.educations[index].institute &&
                      formik.touched.educations &&
                      formik.touched.educations[index] &&
                      formik.touched.educations[index].institute
                        ? 'unvalidated-input-label'
                        : 'institute-label'
                    }
                    className={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      formik.errors.educations[index].institute &&
                      formik.touched.educations &&
                      formik.touched.educations[index] &&
                      formik.touched.educations[index].institute
                        ? 'unvalidated-input'
                        : formik.touched.educations &&
                          formik.touched.educations[index] &&
                          formik.touched.educations[index].institute
                        ? 'validated-input'
                        : 'education-institute-input'
                    }
                  />
                  {formik.errors.educations &&
                  formik.errors.educations[index] &&
                  formik.errors.educations[index].institute &&
                  formik.touched.educations &&
                  formik.touched.educations[index] &&
                  formik.touched.educations[index].institute ? (
                    <img
                      src={validatedFailedIcon}
                      draggable={false}
                      className={'unvalidated-icon'}
                      alt=''
                    />
                  ) : formik.touched.educations &&
                    formik.touched.educations[index] &&
                    formik.touched.educations[index].institute ? (
                    <img
                      src={validatedPassedIcon}
                      draggable={false}
                      className={'validated-icon'}
                      alt=''
                    />
                  ) : (
                    ''
                  )}
                  <p className='hint'>მინიმუმ 2 სიმბოლო</p>
                </div>

                <div className='education-degree-container'>
                  <div className='education-degree-input-container'>
                    <label
                      className={
                        formik.errors.educations &&
                        formik.errors.educations[index] &&
                        formik.errors.educations[index].degree &&
                        formik.touched.educations &&
                        formik.touched.educations[index] &&
                        formik.touched.educations[index].degree
                          ? 'unvalidated-input-label'
                          : 'degree-label'
                      }
                      htmlFor='degrees'
                    >
                      აირჩიეთ ხარისხი
                    </label>
                    {/* todo fix this */}
                    <select
                      id='degrees'
                      name={`educations[${index}].degree`}
                      className={
                        formik.errors.educations &&
                        formik.errors.educations[index] &&
                        formik.errors.educations[index].degree &&
                        formik.touched.educations &&
                        formik.touched.educations[index] &&
                        formik.touched.educations[index].degree
                          ? 'degrees-select unvalidated-input'
                          : formik.touched.educations &&
                            formik.touched.educations[index] &&
                            formik.touched.educations[index].degree
                          ? 'degrees-select validated-input'
                          : 'degrees-select'
                      }
                      onChange={formik.handleChange}
                      value={fieldName.degree}
                    >
                      <option
                        value=''
                        className='select-option'
                        disabled
                        defaultValue
                      >
                        აირჩიეთ ხარისხი
                      </option>
                      {degreeList.map((degree) => {
                        return (
                          <option className='degree-options' key={degree.id}>
                            {degree.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className='education-endDate-input-container'>
                    <CustomInput
                      className={
                        formik.errors.educations &&
                        formik.errors.educations[index] &&
                        formik.errors.educations[index].due_date &&
                        formik.touched.educations &&
                        formik.touched.educations[index] &&
                        formik.touched.educations[index].due_date
                          ? 'unvalidated-input'
                          : formik.touched.educations &&
                            formik.touched.educations[index] &&
                            formik.touched.educations[index].due_date
                          ? 'validated-input'
                          : 'education-endDate-input'
                      }
                      htmlForName={`educations[${index}].due_date`}
                      label={'დამთავრების რიცხვი'}
                      onChangeFunc={formik.handleChange}
                      type={'date'}
                      value={fieldName.due_date}
                      labelClass={
                        formik.errors.educations &&
                        formik.errors.educations[index] &&
                        formik.errors.educations[index].due_date &&
                        formik.touched.educations &&
                        formik.touched.educations[index] &&
                        formik.touched.educations[index].due_date
                          ? 'unvalidated-input-label'
                          : 'education-endDate-label'
                      }
                    />
                  </div>
                </div>
                <div className='education-description-input-container'>
                  <CustomInput
                    className={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      formik.errors.educations[index].description &&
                      formik.touched.educations &&
                      formik.touched.educations[index] &&
                      formik.touched.educations[index].description
                        ? 'unvalidated-input'
                        : formik.touched.educations &&
                          formik.touched.educations[index] &&
                          formik.touched.educations[index].description
                        ? 'validated-input'
                        : 'education-description-input'
                    }
                    htmlForName={`educations[${index}].description`}
                    label={'აღწერა'}
                    onChangeFunc={formik.handleChange}
                    placeholder={'განათლების აღწერა'}
                    type={'text'}
                    value={fieldName.description}
                    labelClass={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      formik.errors.educations[index].description &&
                      formik.touched.educations &&
                      formik.touched.educations[index] &&
                      formik.touched.educations[index].description
                        ? 'unvalidated-input-label'
                        : 'description-label'
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
              buttonText={'სხვა სასწავლებლის დამატება'}
              onClickFunc={handleAddEducationField}
            ></CustomButton>
          </div>
          <div className='navigation-button-container'>
            <CustomButton
              className={'navigation-btn'}
              onClickFunc={() => setPage(page - 1)}
              buttonText={'უკან'}
            ></CustomButton>
            <CustomButton
              className={'navigation-btn'}
              type={'submit'}
              buttonText={'დასრულება'}
            ></CustomButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Education;
