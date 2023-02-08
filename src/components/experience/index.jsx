import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import './styles.css';
const Experience = () => {
  const { setInputsInfo, inputsInfo, page, setPage } = useContext(UserContext);

  const handleAddField = (e) => {
    setInputsInfo({
      ...inputsInfo,
      experiences: [
        ...inputsInfo.experiences,
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
  const handleOnChange = (e, index) => {
    const value = e.target.value;
    const name = e.target.name;
    const updatedExperiences = [...inputsInfo.experiences];
    updatedExperiences[index][name] = value;
    setInputsInfo({
      ...inputsInfo,
      experiences: updatedExperiences,
    });
  };
  return (
    <>
      <div className='fill-form-container'>
        <div className='page-title'>
          <h1>გამოცდილება</h1>
          <p>{page}/3</p>
        </div>
        <div className='underline'></div>
        {inputsInfo.experiences.map((fieldName, index) => {
          return (
            <div className='fieldes-container' key={index}>
              <div className='experience-position-input-container'>
                <CustomInput
                  className={' experience-position-input'}
                  htmlForName={'position'}
                  label={'თანამდებობა'}
                  onChangeFunc={(e) => {
                    handleOnChange(e, index);
                  }}
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
                  htmlForName={'employer'}
                  label={'დამსაქმებელი'}
                  onChangeFunc={(e) => {
                    handleOnChange(e, index);
                  }}
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
                    htmlForName={'start_date'}
                    label={'დაწყების რიცხვი'}
                    onChangeFunc={(e) => {
                      handleOnChange(e, index);
                    }}
                    type={'date'}
                    value={fieldName.start_date}
                    labelClass={'start-date-label'}
                  />
                </div>
                <div className='user-end-date-input-container'>
                  <CustomInput
                    className={' user-end-date-input'}
                    htmlForName={'due_date'}
                    label={'დამთავრების რიცხვი'}
                    onChangeFunc={(e) => {
                      handleOnChange(e, index);
                    }}
                    type={'date'}
                    value={fieldName.due_date}
                    labelClass={'end-date-label'}
                  />
                </div>
              </div>
              <div className='experience-description-input-container'>
                <CustomInput
                  className={' experience-description-input'}
                  htmlForName={'description'}
                  label={'აღწერა'}
                  onChangeFunc={(e) => {
                    handleOnChange(e, index);
                  }}
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
            buttonText={'მეტი გამოცდილების დამატება'}
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

export default Experience;
