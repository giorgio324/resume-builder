import './styles.css';
import ResumeLayout from '../../Layouts/ResumeLayout';
import Preview from '../../components/Preview';
import PrivateInfo from '../../components/PrivateInfo';
import Experience from '../../components/Experience';
import Education from '../../components/Education';
import { UserContext } from '../../context/global.context';
import { useContext } from 'react';
const Resume = () => {
  const { page } = useContext(UserContext);
  return (
    <ResumeLayout>
      {page === 1 ? (
        <>
          <PrivateInfo />
          <Preview />
        </>
      ) : page === 2 ? (
        <>
          <Experience />
          <Preview />
        </>
      ) : page === 3 ? (
        <>
          <Education />
          <Preview />
        </>
      ) : (
        <div className='resume-finished-page'>
          <Preview />
        </div>
      )}
    </ResumeLayout>
  );
};

export default Resume;
