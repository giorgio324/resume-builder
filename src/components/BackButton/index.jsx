import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/global.context';
import arrow from '../../images/back-arrow.svg';
import './styles.css';
const BackButton = () => {
  const { formik, setPage } = useContext(UserContext);
  const resetToDefault = () => {
    formik.setValues({
      name: '',
      surname: '',
      about_me: '',
      email: '',
      phone_number: '',
      image: '',
      experiences: [
        {
          position: '',
          employer: '',
          start_date: '',
          due_date: '',
          description: '',
        },
      ],
      educations: [
        {
          institute: '',
          degree: '',
          due_date: '',
          description: '',
        },
      ],
    });
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
