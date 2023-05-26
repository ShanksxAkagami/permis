import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Mon Site Web</div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Accueil</li>
          <li style={styles.navItem}>Services</li>
          <li style={styles.navItem}>Formations</li>
          <li style={styles.navItem}>Contact</li>
        </ul>
      </nav>
      <div style={styles.buttons}>
        <button style={styles.button}>Connexion</button>
        <button style={styles.button}>Inscription</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#293241',
    color: '#fff',
    padding: '20px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  },
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  nav: {
    flexGrow: 1,
    marginLeft: '40px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
    cursor: 'pointer',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'color 0.3s ease-in-out',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: '10px',
    background: '#EE6C4D',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease-in-out',
  },
};

export default Header;
