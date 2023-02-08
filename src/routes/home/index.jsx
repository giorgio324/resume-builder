import logoTitle from '../../images/logo-title.svg';
import logoAgency from '../../images/logo-agency.svg';
import { Link } from 'react-router-dom';
import './styles.css';
function Home() {
  return (
    <section className='create-resume-container'>
      <div className='create-resume'>
        <div className='title-container'>
          <div className='title'>
            <img src={logoTitle} alt='' />
          </div>
          <div className='underline'></div>
        </div>
      </div>
      <div className='button-container'>
        <Link to='/resume'>
          <button className='add-resume-btn'>რეზიუმეს დამატება</button>
        </Link>
      </div>
      <div className='redbery-logo'>
        <img src={logoAgency} alt='' />
      </div>
    </section>
  );
}

export default Home;
