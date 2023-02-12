import { useState, createContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { schema } from '../schemas';
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
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
        degree: '',
        due_date: '',
        description: '',
      },
    ],
  };
  const formik = useFormik({
    initialValues,
    validationSchema: schema[page - 1],
    onSubmit: (values) => {
      console.log('submited values: ', values);
      setPage(page + 1);
    },
  });

  console.log('values', formik.values);
  console.log('errors', formik.errors);
  console.log('touched', formik.touched);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
