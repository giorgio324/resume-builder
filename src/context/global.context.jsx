import { useState, createContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { schema } from '../schemas';
import axios from 'axios';
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState();
  const [degreeList, setDegreeList] = useState([]);
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem('pageNumber');
    return storedPage ? JSON.parse(storedPage) : 1;
  });
  const checkDataCvs = async () => {
    try {
      const formData = new FormData();
      formData.append('name', formik.values.name);
      formData.append('surname', formik.values.surname);
      formData.append('about_me', formik.values.about_me);
      formData.append('email', formik.values.email);
      formData.append('phone_number', formik.values.phone_number);
      formik.values.educations.forEach((education, index) => {
        const educationKeys = Object.keys(education);
        educationKeys.forEach((key) => {
          formData.append(`educations[${index}][${key}]`, education[key]);
        });
      });
      formik.values.experiences.forEach((experience, index) => {
        const experienceKeys = Object.keys(experience);
        experienceKeys.forEach((key) => {
          formData.append(`experiences[${index}][${key}]`, experience[key]);
        });
      });

      if (formik.values.image) {
        if (typeof formik.values.image === 'string') {
          // if image is already a URL string, just append it
          formData.append('image', formik.values.image[0]);
        } else {
          // else, append the file object after checking it's a valid image type
          const validImageTypes = ['image/png', 'image/jpeg', 'image/gif'];
          if (validImageTypes.includes(formik.values.image.type)) {
            formData.append('image', formik.values.image);
          } else {
            formik.setErrors({ image: ['The image must be an image.'] });
            return;
          }
        }
      }

      const res = await axios.post(
        'https://resume.redberryinternship.ge/api/cvs',
        formData
      );
      setFetchedData(res.data);
      localStorage.setItem('featchedData', JSON.stringify(res.data));
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
    image: {},
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
        checkDataCvs();
        console.log('data i am sending :', formik.values);
        setPage(page + 1);
      }
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
        fetchedData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
