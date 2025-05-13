import mobileError from '../../assets/error/smallError.svg'
import grandError from '../../assets/error/grandError.svg'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
      <>
        <div className='error-container'>
          <img src={mobileError} alt="error" className='error-container__mobileError' />
          <img src={grandError} alt="error" className='error-container__grandError' />
        </div>
        <div className='error-txt-container'>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className='back-home'>
          <Link to="/" className='back-home__link'>Retourner sur la page d'accueil</Link>
        </div>
      </>
    );
  }
  
  export default NotFound;