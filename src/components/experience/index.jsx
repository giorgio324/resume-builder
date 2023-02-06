import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import './styles.css';
const Experience = () => {
  const { experienceInfo, setExperienceInfo, page, setPage } =
    useContext(UserContext);

  const handleAddField = (e) => {
    setExperienceInfo((prevInfo) => [
      ...prevInfo,
      {
        position: '',
        employer: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };
  const handleOnChange = (e, index) => {
    const value = e.target.value;
    const name = e.target.name;
    const updatedFields = [...experienceInfo];
    updatedFields[index][name] = value;
    setExperienceInfo(updatedFields);
  };
  console.log(experienceInfo);
  return (
    <>
      <div className='experience-container'>
        <div className='experience-title-container'>
          <div className='experience-title'>
            <h1>გამოცდილება</h1>
            <p>{page}/3</p>
          </div>
          <div className='underline'></div>
        </div>
        {experienceInfo.map((fieldName, index) => {
          return (
            <div className='experience-fieldes-container' key={index}>
              <div className='experience-position-input-container'>
                <CustomInput
                  className={'input-default experience-position-input'}
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
                <p>მინიმუმ 2 სიმბოლო </p>
              </div>
              <div className='experience-employer-input-container'>
                <CustomInput
                  className={'input-default experience-employer-input'}
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
                <p>მინიმუმ 2 სიმბოლო </p>
              </div>
              <div className='experience-dates-container'>
                <div className='user-start-date-input-container'>
                  <CustomInput
                    className={'input-default user-start-date-input'}
                    htmlForName={'startDate'}
                    label={'დაწყების რიცხვი'}
                    onChangeFunc={(e) => {
                      handleOnChange(e, index);
                    }}
                    type={'date'}
                    value={fieldName.startDate}
                    labelClass={'start-date-label'}
                  />
                </div>
                <div className='user-end-date-input-container'>
                  <CustomInput
                    className={'input-default user-end-date-input'}
                    htmlForName={'endDate'}
                    label={'დამთავრების რიცხვი'}
                    onChangeFunc={(e) => {
                      handleOnChange(e, index);
                    }}
                    type={'date'}
                    value={fieldName.endDate}
                    labelClass={'end-date-label'}
                  />
                </div>
              </div>
              <div className='experience-description-input-container'>
                <CustomInput
                  className={'input-default experience-description-input'}
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
              <div className='result-underline'></div>
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