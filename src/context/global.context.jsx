import { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [privateInfo, setPrivateInfo] = useState({
    name: '',
    lastName: '',
    about: '',
    email: '',
    phoneNumber: '',
    image: '',
  });
  const [page, setPage] = useState(1);

  return (
    <UserContext.Provider
      value={{ privateInfo, setPrivateInfo, page, setPage }}
    >
      {children}
    </UserContext.Provider>
  );
};
