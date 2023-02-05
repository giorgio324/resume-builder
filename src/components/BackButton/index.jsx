import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/back-arrow.svg';
import './styles.css';
const BackButton = () => {
  return (
    <div className='back-button-container'>
      <Link to='/'>
        <button className='back-btn'>
          <img src={arrow} alt='' />
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
