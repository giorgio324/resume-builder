import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import './styles.css';
const Education = () => {
  const { educationInfo, setEducationInfo, page, setPage } =
    useContext(UserContext);

  const handleAddField = (e) => {
    setEducationInfo((prevInfo) => [
      ...prevInfo,
      {
        institute: '',
        degree: '',
        due_date: '',
        description: '',
      },
    ]);
  };
  const handleOnChange = (e, index) => {
    const value = e.target.value;
    const name = e.target.name;
    const updatedFields = [...educationInfo];
    updatedFields[index][name] = value;
    setEducationInfo(updatedFields);
  };
  return (
    <>
      <div className='fill-form-container'>
        <div className='page-title'>
          <h1>გამოცდილება</h1>
          <p>{page}/3</p>
        </div>
        <div className='underline'></div>
        {/* todo change values and onchange func */}
        {educationInfo.map((fieldName, index) => {
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
                  <CustomInput
                    className={'education-degree-input'}
                    htmlForName={'degree'}
                    label={'ხარისხი'}
                    onChangeFunc={(e) => {
                      handleOnChange(e, index);
                    }}
                    placeholder={'აირჩიეთ ხარისხი'}
                    type={'dropdown'}
                    value={fieldName.degree}
                    labelClass={'degree-label'}
                  />
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
