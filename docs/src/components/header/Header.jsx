import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo/LOGO.svg';
import MobileLogo from '../../assets/logo/MOBILELOGO.svg';

function Header() {
  return (
    <header className="header">
      {/* Logo principal pour les écrans desktop */}
      <img src={Logo} alt="Logo" className="header__logo-desktop" />
      
      {/* Logo pour les écrans mobiles */}
      <img src={MobileLogo} alt='Mobile Logo' className="header__logo-mobile" />
      
      <nav>
        {/* Liens de navigation avec gestion de l'état actif */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}>À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
