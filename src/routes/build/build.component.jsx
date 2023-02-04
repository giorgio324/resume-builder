import './Build.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import arrow from '../../images/back-arrow.svg';
const Resume = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
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
          <input
            type='file'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className='result'>
        <h1>{name}</h1>
        <p>{position}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Resume;
