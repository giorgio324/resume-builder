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
    defaultExperienceInfo,
    defaultEducationInfo,
  } = useContext(UserContext);
  const resetToDefault = () => {
    setPrivateInfo(defaultPrivateInfo);
    setExperienceInfo([defaultEducationInfo]);
    setEducationInfo([defaultExperienceInfo]);
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
