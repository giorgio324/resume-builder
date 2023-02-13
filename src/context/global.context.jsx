import { useState, createContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { schema } from '../schemas';
import axios from 'axios';
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [degreeList, setDegreeList] = useState([]);
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem('pageNumber');
    return storedPage ? JSON.parse(storedPage) : 1;
  });
  const checkDataCvs = async () => {
    try {
      // const res = await fetch('https://resume.redberryinternship.ge/api/cvs', {
      //   method: 'post',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formik.values),
      // });
      const res = await axios.post(
        'https://resume.redberryinternship.ge/api/cvs',
        formik.values
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = JSON.parse(
    localStorage.getItem('formikInputValues')
  ) || {
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
        degree_id: '',
        due_date: '',
        description: '',
      },
    ],
  };
  const formik = useFormik({
    initialValues,
    validationSchema: schema[page - 1],
    onSubmit: (values) => {
      if (page <= 2) {
        setPage(page + 1);
      } else {
        console.log('data i am sending :', formik.values);
        checkDataCvs();
      }
      console.log('page:', page);
    },
  });
  // fetch degree list from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://resume.redberryinternship.ge/api/degrees'
        );
        const responseData = await response.json();
        setDegreeList(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // local storage setItem functions
  useEffect(() => {
    localStorage.setItem('formikInputValues', JSON.stringify(formik.values));
  }, [formik.values]);
  useEffect(() => {
    localStorage.setItem('pageNumber', JSON.stringify(page));
    // this fixes a bug where touched is applyed to all values in formik when page changes
    formik.setTouched({});
  }, [page]);

  return (
    <UserContext.Provider
      value={{
        page,
        setPage,
        formik,
        degreeList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
