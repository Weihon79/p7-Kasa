import { Link } from 'react-router-dom';
import Logo from '../assets/logo/LOGO.svg';

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;