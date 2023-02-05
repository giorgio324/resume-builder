import './Build.css';
import ResumeLayout from '../../Layouts/ResumeLayout';
import Preview from '../../components/Preview';
import PrivateInfo from '../../components/PrivateInfo';
import Experience from '../../components/experience';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
const Resume = () => {
  const { page } = useContext(UserContext);
  return (
    <ResumeLayout>
      {page === 1 ? (
        <PrivateInfo />
      ) : page === 2 ? (
        <Experience />
      ) : (
        <h1>page 3</h1>
      )}

      <Preview />
    </ResumeLayout>
  );
};

export default Resume;
