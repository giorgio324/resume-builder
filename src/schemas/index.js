import * as Yup from 'yup';

export const basicSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[ა-ჰ]+$/, 'Name must contain Georgian letters only')
    .min(2, 'Name must be at least 2 letters long')
    .required('Name is required'),
  surname: Yup.string()
    .matches(/^[ა-ჰ]+$/, 'Name must contain Georgian letters only')
    .min(2, 'Name must be at least 2 letters long')
    .required('Name is required'),
  about_me: Yup.string(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone_number: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
  image: Yup.mixed().required('Image is required'),
  experiences: Yup.array().of(
    Yup.object().shape({
      position: Yup.string().required('Position is required'),
      employer: Yup.string().required('Employer is required'),
      start_date: Yup.date().required('Start date is required'),
      due_date: Yup.date().required('Due date is required'),
      description: Yup.string().required('Description is required'),
    })
  ),
  educations: Yup.array().of(
    Yup.object().shape({
      institute: Yup.string().required('Institute is required'),
      degree: Yup.string().required('Degree is required'),
      due_date: Yup.date().required('Due date is required'),
      description: Yup.string().required('Description is required'),
    })
  ),
});
