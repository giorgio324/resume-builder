import React from 'react';
import './styles.css';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import ValidationIcons from '../ValidationIcons';
import validatedPassedIcon from '../../images/validationPassed.svg';
import validatedFailedIcon from '../../images/validationFailed.svg';
const PrivateInfo = () => {
  const { page, formik } = useContext(UserContext);

  const pictureHandler = (e) => {
    formik.setValues({
      ...formik.values,
      image: e.target.files[0],
    });

    console.log(e.target.files[0]);
  };

  return (
    <>
      <div className='fill-form-container'>
        <div className='page-title'>
          <h1>პირადი ინფო</h1>
          <p>{page}/3</p>
        </div>
        <div className='underline'></div>
        <form
          className='fieldes-container p1-field'
          onSubmit={formik.handleSubmit}
        >
          <div className='name-lastname-container'>
            <div className='user-name-input-container'>
              <CustomInput
                className={
                  formik.errors.name && formik.touched.name
                    ? 'unvalidated-input'
                    : formik.touched.name
                    ? 'validated-input'
                    : 'user-nameame-input'
                }
                htmlForName='name'
                label={'სახელი'}
                onChangeFunc={formik.handleChange}
                onBlurFunc={formik.handleBlur}
                value={formik.values.name}
                placeholder={'ანზორ'}
                type='text'
                labelClass={
                  formik.errors.name && formik.touched.name
                    ? 'unvalidated-input-label'
                    : formik.touched.name
                    ? 'validated-input-label'
                    : 'name-label'
                }
              />
              <ValidationIcons formik={formik} iconFor={'name'} />
              <p className='hint'>მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className='user-lastName-input-container'>
              <CustomInput
                className={
                  formik.errors.surname && formik.touched.surname
                    ? 'unvalidated-input'
                    : formik.touched.surname
                    ? 'validated-input'
                    : 'user-lastName-input'
                }
                htmlForName={'surname'}
                label={'გვარი'}
                onChangeFunc={formik.handleChange}
                onBlurFunc={formik.handleBlur}
                placeholder={'მუმლაძე'}
                type={'text'}
                value={formik.values.surname}
                labelClass={
                  formik.errors.surname && formik.touched.surname
                    ? 'unvalidated-input-label'
                    : formik.touched.surname
                    ? 'validated-input-label'
                    : 'lastName-label'
                }
              />
              <ValidationIcons formik={formik} iconFor={'surname'} />
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
              onBlurFunc={formik.handleBlur}
              type={'file'}
              id={'file-input'}
              labelClass={'picture-label'}
            />
            {formik.values.image ? (
              <img
                src={validatedPassedIcon}
                draggable={false}
                className={'validated-icon image-validation-icon'}
                alt=''
              />
            ) : formik.errors.image && formik.touched.image ? (
              <img
                src={validatedFailedIcon}
                draggable={false}
                className={'unvalidated-icon image-validation-icon'}
                alt=''
              />
            ) : (
              ''
            )}
          </div>
          <div className='user-about-input-container'>
            <CustomInput
              className={
                formik.touched.about_me && formik.values.about_me.length > 0
                  ? 'validated-input'
                  : 'user-about-input'
              }
              htmlForName={'about_me'}
              label={'ჩემ შესახებ (არასავალდებულო)'}
              onChangeFunc={formik.handleChange}
              onBlurFunc={formik.handleBlur}
              placeholder={'ზოგადი ინფო შენს შესახებ'}
              type={'text'}
              value={formik.values.about_me}
              labelClass={'about-label'}
              isTextArea
            />
          </div>
          <div className='user-email-input-container'>
            <CustomInput
              className={
                formik.errors.email && formik.touched.email
                  ? 'unvalidated-input'
                  : formik.touched.email
                  ? 'validated-input'
                  : 'user-email-input'
              }
              htmlForName={'email'}
              label={'ელ ფოსტა'}
              onChangeFunc={formik.handleChange}
              onBlurFunc={formik.handleBlur}
              placeholder={'anzorr666@redberry.ge'}
              type={'email'}
              value={formik.values.email}
              labelClass={
                formik.errors.email && formik.touched.email
                  ? 'unvalidated-input-label'
                  : formik.touched.email
                  ? 'validated-input-label'
                  : 'email-label'
              }
            />
            <ValidationIcons formik={formik} iconFor={'email'} />
            <p className='hint'>უნდა მთავრდებოდეს @redberry.ge-ით </p>
          </div>
          <div className='user-number-input-container'>
            <CustomInput
              className={
                formik.errors.phone_number && formik.touched.phone_number
                  ? 'unvalidated-input'
                  : formik.touched.phone_number
                  ? 'validated-input'
                  : 'phone-input'
              }
              htmlForName={'phone_number'}
              label={'მობილურის ნომერი'}
              onChangeFunc={formik.handleChange}
              onBlurFunc={formik.handleBlur}
              placeholder={'+995551123456'}
              type={'text'}
              value={formik.values.phone_number}
              labelClass={
                formik.errors.phone_number && formik.touched.phone_number
                  ? 'unvalidated-input-label'
                  : formik.touched.phone_number
                  ? 'validated-input-label'
                  : 'phoneNumber-label'
              }
            />
            <ValidationIcons formik={formik} iconFor={'phone_number'} />
            <p className='hint'>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>
          </div>
          <CustomButton
            className={'navigation-btn'}
            type={'submit'}
            buttonText={'შემდეგი'}
          ></CustomButton>
        </form>
      </div>
    </>
  );
};

export default PrivateInfo;
