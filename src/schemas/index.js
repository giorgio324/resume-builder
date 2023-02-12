import * as Yup from 'yup';

export const schema = [
  Yup.object().shape({
    name: Yup.string()
      .matches(/^[ა-ჰ]+$/, 'Name must contain Georgian letters only')
      .min(2, 'Name must be at least 2 letters long')
      .required('Name is required'),
    surname: Yup.string()
      .matches(/^[ა-ჰ]+$/, 'Name must contain Georgian letters only')
      .min(2, 'Name must be at least 2 letters long')
      .required('Name is required'),
    about_me: Yup.string(),
    email: Yup.string()
      .email('Invalid email')
      .matches(/@redberry.ge$/, 'Email must end with "@redberry.ge"')
      .required('Email is required'),
    phone_number: Yup.string()
      .matches(
        /^\+995[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}$/,
        'Invalid phone number format. Example: +995123456789'
      )
      .required('Phone number is required'),
    image: Yup.mixed().required('Image is required'),
  }),
  Yup.object().shape({
    experiences: Yup.array().of(
      Yup.object().shape({
        position: Yup.string()
          .required('Position is required')
          .min(2, 'Position must be at least 2 characters long'),
        employer: Yup.string()
          .required('Employer is required')
          .min(2, 'Employer must be at least 2 characters long'),
        start_date: Yup.date().required('Start date is required'),
        due_date: Yup.date().required('Due date is required'),
        description: Yup.string().required('Description is required'),
      })
    ),
  }),
  Yup.object().shape({
    educations: Yup.array().of(
      Yup.object().shape({
        institute: Yup.string()
          .required('Institute is required')
          .min(2, 'Institute must be at least 2 characters long'),
        degree: Yup.string().required('Degree is required'),
        due_date: Yup.date().required('Due date is required'),
        description: Yup.string().required('Description is required'),
      })
    ),
  }),
];
