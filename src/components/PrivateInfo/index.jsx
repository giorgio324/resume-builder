import React from 'react';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
import CustomInput from '../CustomInput';

const PrivateInfo = () => {
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
      <div className='private-info'>
        <div className='private-info-title-container'>
          <div className='private-info-title'>
            <h1>პირადი ინფო</h1>
            <p>{page}/3</p>
          </div>
          <div className='underline'></div>
        </div>
        <div className='name-lastname-container'>
          <div className='user-name-input-container'>
            {/* <label htmlFor='name' className='user-name-input-label'>
              სახელი
            </label>
            <input
              name='name'
              type='text'
              placeholder='Name'
              value={privateInfo.name}
              onChange={handleChange}
              className='user-name-input input-default'
            /> */}
            <CustomInput
              htmlForName='name'
              label={'SAXELI'}
              onChangeFunc={handleChange}
              value={privateInfo.name}
              placeholder={'SAXELII'}
              type='text'
            />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div className='user-lastName-input-container'>
            <label htmlFor='lastName' className='user-lastName-input-label'>
              გვარი
            </label>
            <input
              name='lastName'
              type='text'
              className='input-default user-lastName-input'
              placeholder='lastname'
              value={privateInfo.lastName}
              onChange={handleChange}
            />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className='user-picture-input-container'>
          <p>პირადი ფოტოს ატვირთვა</p>
          <label htmlFor='file-input' className='user-picture-input-label'>
            ატვირთვა
          </label>
          <input
            onChange={pictureHandler}
            type='file'
            style={{ display: 'none' }}
            id='file-input'
            name='image'
          />
        </div>
        <div className='user-about-input-container'>
          <label htmlFor='about' className='user-about-input-label'>
            ჩემ შესახებ (არასავალდებულო)
          </label>
          <textarea
            name='about'
            type='text'
            placeholder='ზოგადი ინფო შენს შესახებ'
            value={privateInfo.about}
            onChange={handleChange}
          />
        </div>
        <div className='user-about-input-container'>
          <label htmlFor='email'>ელ ფოსტა</label>
          <input
            name='email'
            type='email'
            placeholder='email'
            className='input-default email-input'
            value={privateInfo.email}
            onChange={handleChange}
          />

          <p>უნდა მთავრდებოდეს @redberry.ge-ით </p>
        </div>
        <div className='user-number-input-container'>
          <label htmlFor='phoneNumber'>მობილურის ნომერი</label>
          <input
            name='phoneNumber'
            type='text'
            className='input-default phone-input'
            placeholder='+995 551 12 34 56'
            value={privateInfo.phoneNumber}
            onChange={handleChange}
          />
          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
        </div>
        <button className='btn-next' onClick={() => setPage(page + 1)}>
          შემდეგი
        </button>
      </div>
    </>
  );
};

export default PrivateInfo;
