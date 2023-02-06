import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import './styles.css';
const Experience = () => {
  const { privateInfo, setPrivateInfo, page, setPage } =
    useContext(UserContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPrivateInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };
  console.log(privateInfo);
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
        <div className='experience-position-input-container'>
          <CustomInput
            className={'input-default experience-position-input'}
            htmlForName={'position'}
            label={'თანამდებობა'}
            onChangeFunc={handleChange}
            placeholder={'დეველოპერი, დიზაინერი, ა.შ.'}
            type={'text'}
            value={privateInfo.position}
            labelClass={'position-label'}
          />
          <p>მინიმუმ 2 სიმბოლო </p>
        </div>
        <div className='experience-employer-input-container'>
          <CustomInput
            className={'input-default experience-employer-input'}
            htmlForName={'employer'}
            label={'დამსაქმებელი'}
            onChangeFunc={handleChange}
            placeholder={'დამსაქმებელი'}
            type={'text'}
            value={privateInfo.employer}
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
              onChangeFunc={handleChange}
              type={'date'}
              value={privateInfo.startDate}
              labelClass={'start-date-label'}
            />
          </div>
          <div className='user-end-date-input-container'>
            <CustomInput
              className={'input-default user-end-date-input'}
              htmlForName={'endDate'}
              label={'დამთავრების რიცხვი'}
              onChangeFunc={handleChange}
              type={'date'}
              value={privateInfo.endDate}
              labelClass={'end-date-label'}
            />
          </div>
        </div>
        <div className='experience-description-input-container'>
          <CustomInput
            className={'input-default experience-description-input'}
            htmlForName={'description'}
            label={'აღწერა'}
            onChangeFunc={handleChange}
            placeholder={'როლი თანამდებობაზე და ზოგადი აღწერა'}
            type={'text'}
            value={privateInfo.description}
            labelClass={'description-label'}
            isTextArea
          />
        </div>
        <div className='result-underline'></div>
        <div className='add-more-experience-button-container'>
          <CustomButton
            className={'add-more'}
            buttonText={'მეტი გამოცდილების დამატება'}
            onClickFunc={() => console.log('clicked')}
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
