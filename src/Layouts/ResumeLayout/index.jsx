import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/back-arrow.svg';

const ResumeLayout = ({ children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default ResumeLayout;
