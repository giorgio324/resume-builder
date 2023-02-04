import { useState, useContext, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [privateInfo, setPrivateInfo] = useState({
    name: '',
    lastName: '',
    about: '',
    email: '',
    phoneNumber: '',
  });
  return (
    <UserContext.Provider value={{ privateInfo, setPrivateInfo }}>
      {children}
    </UserContext.Provider>
  );
};
