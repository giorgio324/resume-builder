import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
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

  const pictureHandler = (e) => {
    setPrivateInfo((prevInfo) => ({
      ...prevInfo,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

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
        <div className='user-email-input-container'>
          <CustomInput
            className={'input-default user-email-input'}
            htmlForName={'email'}
            label={'ელ ფოსტა'}
            onChangeFunc={handleChange}
            placeholder={'anzorr666@redberry.ge'}
            type={'email'}
            value={privateInfo.email}
            labelClass={'email'}
          />
          <p>უნდა მთავრდებოდეს @redberry.ge-ით </p>
        </div>
        <div className='user-number-input-container'>
          <CustomInput
            className={'input-default phone-input'}
            htmlForName={'phoneNumber'}
            label={'მობილურის ნომერი'}
            onChangeFunc={handleChange}
            placeholder={'+995 551 12 34 56'}
            type={'text'}
            value={privateInfo.phoneNumber}
            labelClass={'phoneNumber'}
          />
          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
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

        <button className='btn-next' onClick={() => setPage(page + 1)}>
          შემდეგი
        </button>
      </div>
    </>
  );
};

export default Experience;
