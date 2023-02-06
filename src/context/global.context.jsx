import { useState, createContext } from 'react';

export const UserContext = createContext();
export const defaultPrivateInfo = {
  name: '',
  lastName: '',
  about: '',
  email: '',
  phoneNumber: '',
  image: '',
};
export const defaultExperienceInfo = {
  position: '',
  employer: '',
  startDate: '',
  endDate: '',
  description: '',
};
export const UserContextProvider = ({ children }) => {
  const [privateInfo, setPrivateInfo] = useState(defaultPrivateInfo);
  const [experienceInfo, setExperienceInfo] = useState([defaultExperienceInfo]);
  const [page, setPage] = useState(1);

  return (
    <UserContext.Provider
      value={{
        experienceInfo,
        setExperienceInfo,
        privateInfo,
        setPrivateInfo,
        page,
        setPage,
        defaultPrivateInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
