import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/global.context';
import arrow from '../../images/back-arrow.svg';
import './styles.css';
const BackButton = () => {
  const {
    setPrivateInfo,
    setExperienceInfo,
    setEducationInfo,
    setPage,
    defaultPrivateInfo,
  } = useContext(UserContext);
  const resetToDefault = () => {
    setPrivateInfo(defaultPrivateInfo);
    setExperienceInfo([
      {
        position: '',
        employer: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
    setEducationInfo([
      {
        institute: '',
        degree: '',
        due_date: '',
        description: '',
      },
    ]);
    setPage(1);
  };
  return (
    <div className='back-button-container'>
      <Link to='/'>
        <button className='back-btn' onClick={resetToDefault}>
          <img src={arrow} alt='' />
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
