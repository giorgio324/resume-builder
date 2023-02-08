import { useState, createContext, useEffect } from 'react';
export const UserContext = createContext();

export const defaultValues = {
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
export const UserContextProvider = ({ children }) => {
  const [inputsInfo, setInputsInfo] = useState(defaultValues);
  const [page, setPage] = useState(1);
  console.log(inputsInfo);
  return (
    <UserContext.Provider
      value={{
        inputsInfo,
        setInputsInfo,
        defaultValues,
        page,
        setPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
