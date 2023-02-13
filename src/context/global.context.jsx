import { useState, createContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { schema } from '../schemas';
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [degreeList, setDegreeList] = useState([]);
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem('pageNumber');
    return storedPage ? JSON.parse(storedPage) : 1;
  });
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
        console.log('im ready to be sent');
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
