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
      <div className="infos">
        <p className="infos__phone"><i class="fas fa-phone"></i>   0 894 564 783</p>
        <p className="infos__dispo">Lundi au Vendredi 9h-18h</p>
      </div>
    </header>
  );
};

export default Header;

