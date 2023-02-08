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
export const defaultEducationInfo = {
  institute: '',
  degree: '',
  due_date: '',
  description: '',
};
export const UserContextProvider = ({ children }) => {
  const [privateInfo, setPrivateInfo] = useState(defaultPrivateInfo);
  const [experienceInfo, setExperienceInfo] = useState([defaultExperienceInfo]);
  const [educationInfo, setEducationInfo] = useState([defaultEducationInfo]);
  const finalInfo = {
    ...privateInfo,
    experienceInfo,
    educationInfo,
  };
  console.table(finalInfo);
  const [page, setPage] = useState(1);

  return (
    <UserContext.Provider
      value={{
        experienceInfo,
        setExperienceInfo,
        privateInfo,
        setPrivateInfo,
        educationInfo,
        setEducationInfo,
        page,
        setPage,
        defaultPrivateInfo,
        defaultExperienceInfo,
        defaultEducationInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
