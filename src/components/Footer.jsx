import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialIcons}>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <div style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Accueil</li>
          <li style={styles.navItem}>Services</li>
          <li style={styles.navItem}>Formations</li>
          <li style={styles.navItem}>Contact</li>
        </ul>
      </div>
      <div style={styles.copyRight}>
        &copy; {new Date().getFullYear()} Mon Site Web. Tous droits réservés.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#293241',
    color: '#fff',
    padding: '20px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px 8px 0 0',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
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
  },
  copyRight: {
    fontSize: '12px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
};

export default Footer;