import React from 'react';
import BackButton from '../../components/BackButton';

const ResumeLayout = ({ children }) => {
  return (
    <div className='resume-container'>
      <div className='private-info-container'>
        <BackButton />
        {children}
      </div>
    </div>
  );
};

export default ResumeLayout;
