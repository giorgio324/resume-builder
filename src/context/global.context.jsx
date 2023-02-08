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
  const [inputsInfo, setInputsInfo] = useState(() => {
    const storedState = localStorage.getItem('inputValues');
    return storedState ? JSON.parse(storedState) : defaultValues;
  });
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem('pageNumber');
    return storedPage ? JSON.parse(storedPage) : 1;
  });
  console.log(inputsInfo);
  // todo add localsorage and store inputsInfo on each edit

  useEffect(() => {
    localStorage.setItem('inputValues', JSON.stringify(inputsInfo));
  }, [inputsInfo]);
  useEffect(() => {
    localStorage.setItem('pageNumber', JSON.stringify(page));
  }, [page]);
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
