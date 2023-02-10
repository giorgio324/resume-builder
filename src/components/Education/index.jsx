import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/global.context';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
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
        {/* todo change values and onchange func */}
        {formik.values.educations.map((fieldName, index) => {
          return (
            <div className='fieldes-container' key={index}>
              <div className='education-institute-input-container'>
                <CustomInput
                  className={'education-institute-input'}
                  htmlForName={`educations[${index}].institute`}
                  label={'სასწავლებელი'}
                  onChangeFunc={formik.handleChange}
                  placeholder={'სასწავლებელი'}
                  type={'text'}
                  value={fieldName.institute}
                  labelClass={'institute-label'}
                />
                <p className='hint'>მინიმუმ 2 სიმბოლო </p>
              </div>

              <div className='education-degree-container'>
                <div className='education-degree-input-container'>
                  <label htmlFor='degrees'>აირჩიეთ ხარისხი</label>
                  {/* todo fix this */}
                  <select
                    id='degrees'
                    name={`educations[${index}].degree`}
                    className='degrees-select'
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
                    className={'education-endDate-input'}
                    htmlForName={`educations[${index}].due_date`}
                    label={'დამთავრების რიცხვი'}
                    onChangeFunc={formik.handleChange}
                    type={'date'}
                    value={fieldName.due_date}
                    labelClass={'education-endDate-label'}
                  />
                </div>
              </div>
              <div className='education-description-input-container'>
                <CustomInput
                  className={'education-description-input'}
                  htmlForName={`educations[${index}].description`}
                  label={'აღწერა'}
                  onChangeFunc={formik.handleChange}
                  placeholder={'განათლების აღწერა'}
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
            onClickFunc={() => setPage(page + 1)}
            buttonText={'შემდეგი'}
          ></CustomButton>
        </div>
      </div>
    </>
  );
};

export default Education;
