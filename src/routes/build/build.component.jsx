import './Build.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/back-arrow.svg';
const Resume = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState(null);
  const pictureHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
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
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type='text'
            placeholder='Position'
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <br />

          <input onChange={pictureHandler} type='file' name='picture' />
        </div>
      </div>
      <div className='result'>
        <h1>{name}</h1>
        <p>{position}</p>
        <p>{image && <img src={image} className='user-img' />}</p>
      </div>
    </div>
  );
};

export default Resume;
