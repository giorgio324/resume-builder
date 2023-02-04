import './Build.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/back-arrow.svg';
import emailIcon from '../../images/email.svg';
import phoneIcon from '../../images/phone.svg';
const Resume = () => {
  const [page, setPage] = useState(1);
  const [privateInfo, setPrivateInfo] = useState({
    name: '',
    lastName: '',
    about: '',
    email: '',
    phoneNumber: '',
  });
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
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={privateInfo.name}
            onChange={handleChange}
          />
          <br />
          <input
            name='lastName'
            type='text'
            placeholder='Position'
            value={privateInfo.lastName}
            onChange={handleChange}
          />
          <br />

          <input onChange={pictureHandler} type='file' name='image' />
          <input
            name='about'
            type='textarea'
            placeholder='Name'
            value={privateInfo.about}
            onChange={handleChange}
          />
          <br />
          <input
            name='email'
            type='email'
            placeholder='Name'
            value={privateInfo.email}
            onChange={handleChange}
          />
          <br />
          <input
            name='phoneNumber'
            type='text'
            placeholder='Name'
            value={privateInfo.phoneNumber}
            onChange={handleChange}
          />
          <br />
          <button className='btn' onClick={() => setPage(page + 1)}>
            next
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
        {image && <img src={image} className='user-img' />}
        {privateInfo.about}
      </div>
    </div>
  );
};

export default Resume;
