import { useState, createContext } from 'react';

export const UserContext = createContext();
export const defaultInfo = {
  name: '',
  lastName: '',
  about: '',
  email: '',
  phoneNumber: '',
  image: '',
  position: '',
  startDate: '',
};
export const UserContextProvider = ({ children }) => {
  const [privateInfo, setPrivateInfo] = useState(defaultInfo);
  const [page, setPage] = useState(1);

  return (
    <UserContext.Provider
      value={{ privateInfo, setPrivateInfo, page, setPage, defaultInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};
