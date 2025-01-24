import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo/LOGO.svg';

function Header() {
  return (
    <header className='header'>
      <img src={Logo} alt="Logo" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive}) => (isActive ? 'active' : '')}>Accueil</NavLink>
        <NavLink
          to="/about"
          className={({ isActive}) => (isActive ? 'active' : '')}>À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;