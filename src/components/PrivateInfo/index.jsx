import React from 'react';
import './styles.css';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const PrivateInfo = () => {
  const { page, setPage, formik } = useContext(UserContext);

  const pictureHandler = (e) => {
    formik.setValues({
      ...formik.values,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <>
      <div className='fill-form-container'>
        <div className='page-title'>
          <h1>პირადი ინფო</h1>
          <p>{page}/3</p>
        </div>
        <div className='underline'></div>
        <div className='fieldes-container p1-field'>
          <div className='name-lastname-container'>
            <div className='user-name-input-container'>
              <CustomInput
                className={'user-name-input '}
                htmlForName='name'
                label={'სახელი'}
                onChangeFunc={formik.handleChange}
                value={formik.values.name}
                placeholder={'ანზორ'}
                type='text'
                labelClass={'name-label'}
              />
              <p className='hint'>მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className='user-lastName-input-container'>
              <CustomInput
                className={' user-lastName-input'}
                htmlForName={'surname'}
                label={'გვარი'}
                onChangeFunc={formik.handleChange}
                placeholder={'მუმლაძე'}
                type={'text'}
                value={formik.values.surname}
                labelClass={'lastName-label'}
              />
              <p className='hint'>მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>
          <div className='user-picture-input-container'>
            <p>პირადი ფოტოს ატვირთვა</p>
            <CustomInput
              className={' user-picture-input'}
              htmlForName={'file-input'}
              label={'ატვირთვა'}
              onChangeFunc={pictureHandler}
              type={'file'}
              id={'file-input'}
              labelClass={'picture-label'}
            />
          </div>
          <div className='user-about-input-container'>
            <CustomInput
              className={' user-about-input'}
              htmlForName={'about_me'}
              label={'ჩემ შესახებ (არასავალდებულო)'}
              onChangeFunc={formik.handleChange}
              placeholder={'ზოგადი ინფო შენს შესახებ'}
              type={'text'}
              value={formik.values.about_me}
              labelClass={'about-label'}
              isTextArea
            />
          </div>
          <div className='user-email-input-container'>
            <CustomInput
              className={' user-email-input'}
              htmlForName={'email'}
              label={'ელ ფოსტა'}
              onChangeFunc={formik.handleChange}
              placeholder={'anzorr666@redberry.ge'}
              type={'email'}
              value={formik.values.email}
              labelClass={'email-label'}
            />
            <p className='hint'>უნდა მთავრდებოდეს @redberry.ge-ით </p>
          </div>
          <div className='user-number-input-container'>
            <CustomInput
              className={' phone-input'}
              htmlForName={'phone_number'}
              label={'მობილურის ნომერი'}
              onChangeFunc={formik.handleChange}
              placeholder={'+995 551 12 34 56'}
              type={'text'}
              value={formik.values.phone_number}
              labelClass={'phoneNumber-label'}
            />
            <p className='hint'>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>
          </div>
        </div>

        <CustomButton
          className={'navigation-btn'}
          onClickFunc={() => setPage(page + 1)}
          buttonText={'შემდეგი'}
        ></CustomButton>
      </div>
    </>
  );
};

export default PrivateInfo;
