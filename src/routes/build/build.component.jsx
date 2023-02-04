import './Build.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/back-arrow.svg';
import emailIcon from '../../images/email.svg';
import phoneIcon from '../../images/phone.svg';
import { UserContext } from '../../context/global.context';
const Resume = () => {
  const { privateInfo, setPrivateInfo, page, setPage } =
    useContext(UserContext);
  const [image, setImage] = useState(null);
  const pictureHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPrivateInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };
  console.log(privateInfo);
  return (
    <div className='resume-container'>
      <div className='private-info-container'>
        <div className='back-button-container'>
          <Link to='/'>
            <button className='back-btn'>
              <img src={arrow} alt='' />
            </button>
          </Link>
        </div>
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
              <label htmlFor='name' className='user-name-input-label'>
                სახელი
              </label>
              <input
                name='name'
                type='text'
                placeholder='Name'
                value={privateInfo.name}
                onChange={handleChange}
                className='user-name-input input-default'
              />
              <p>მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className='user-lastName-input-container'>
              <label htmlFor='lastName' className='user-name-input-label'>
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
            <label htmlFor='file-input' className='user-name-input-label'>
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
      </div>
      <div className='result'>
        {privateInfo.name && <h1 className='user-name'>{privateInfo.name}</h1>}
        {privateInfo.email && (
          <div className='user-email'>
            <img src={emailIcon} alt='' />
            <p>{privateInfo.email}</p>
          </div>
        )}
        {privateInfo.phoneNumber && (
          <div className='user-phone'>
            <img src={phoneIcon} alt='' />
            <p>{privateInfo.phoneNumber}</p>
          </div>
        )}
        {privateInfo.lastName && privateInfo.lastName}
        {image && <img src={image} className='user-img' alt='' />}
        {privateInfo.about}
      </div>
    </div>
  );
};

export default Resume;
