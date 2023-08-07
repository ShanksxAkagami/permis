import { NavLink } from 'react-router-dom';

import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="navbar">
        <NavLink to="/stages" className="navbar__links">Stage de récupération de points</NavLink>
        <NavLink to="/about" className="navbar__links">Infractions et législation</NavLink>
        <NavLink to="/about" className="navbar__links">Permis a points</NavLink>
        <NavLink to="/about" className="navbar__links">Nous contacter</NavLink>
      </nav>
      <div className="login">
          <button>Connexion</button>
      </div>
    </header>
  );
};

export default Header;

