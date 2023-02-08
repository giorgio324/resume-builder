import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/global.context';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import './styles.css';
const Education = () => {
  const { setInputsInfo, inputsInfo, page, setPage } = useContext(UserContext);
  const [degreeList, setDegreeList] = useState([]);
  const handleAddField = () => {
    setInputsInfo({
      ...inputsInfo,
      educations: [
        ...inputsInfo.educations,
        {
          institute: '',
          degree: '',
          due_date: '',
          description: '',
        },
      ],
    });
  };
  const handleOnChange = (e, index) => {
    const value = e.target.value;
    const name = e.target.name;
    const updatedEducations = [...inputsInfo.educations];
    updatedEducations[index][name] = value;
    setInputsInfo({
      ...inputsInfo,
      educations: updatedEducations,
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
        {inputsInfo.educations.map((fieldName, index) => {
          return (
            <div className='fieldes-container' key={index}>
              <div className='education-institute-input-container'>
                <CustomInput
                  className={'education-institute-input'}
                  htmlForName={'institute'}
                  label={'სასწავლებელი'}
                  onChangeFunc={(e) => {
                    handleOnChange(e, index);
                  }}
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
                    name='degree'
                    className='degrees-select'
                    onChange={(e) => {
                      handleOnChange(e, index);
                    }}
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
                    htmlForName={'due_date'}
                    label={'დამთავრების რიცხვი'}
                    onChangeFunc={(e) => {
                      handleOnChange(e, index);
                    }}
                    type={'date'}
                    value={fieldName.due_date}
                    labelClass={'education-endDate-label'}
                  />
                </div>
              </div>
              <div className='education-description-input-container'>
                <CustomInput
                  className={'education-description-input'}
                  htmlForName={'description'}
                  label={'აღწერა'}
                  onChangeFunc={(e) => {
                    handleOnChange(e, index);
                  }}
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
            onClickFunc={handleAddField}
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
