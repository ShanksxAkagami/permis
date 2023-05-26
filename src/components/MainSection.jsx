import React from 'react';

const MainSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.sectionBox}>
          <h2 style={styles.sectionTitle}>Services de récupération de points</h2>
          <div style={styles.subSection}>
            <h3 style={styles.subSectionTitle}>Récupération de points en ligne</h3>
            <p style={styles.subSectionDescription}>Réservez votre créneau de récupération de points de permis en ligne. Notre équipe d'experts est là pour vous aider à retrouver votre capital de points de manière rapide et efficace.</p>
            <a href="#" style={styles.button}>Réserver maintenant</a>
          </div>
          <div style={styles.subSection}>
            <h3 style={styles.subSectionTitle}>Formation à la conduite responsable</h3>
            <p style={styles.subSectionDescription}>Apprenez les bonnes pratiques de conduite et les règles de la route pour éviter les infractions et préserver votre capital de points de permis.</p>
            <a href="#" style={styles.button}>En savoir plus</a>
          </div>
        </div>
        <div style={styles.sectionBox}>
          <h2 style={styles.sectionTitle}>Offres spéciales</h2>
          <div style={styles.subSection}>
            <h3 style={styles.subSectionTitle}>Forfait Standard</h3>
            <p style={styles.subSectionDescription}>Récupérez 4 points de permis en une seule séance. Durée : 2 heures. Prix : 99€.</p>
            <a href="#" style={styles.offerButton}>Choisir</a>
          </div>
          <div style={styles.subSection}>
            <h3 style={styles.subSectionTitle}>Forfait Premium</h3>
            <p style={styles.subSectionDescription}>Récupérez 6 points de permis en deux séances. Durée totale : 4 heures. Prix : 149€.</p>
            <a href="#" style={styles.offerButton}>Choisir</a>
          </div>
        </div>
        <div style={styles.sectionBox}>
          <h2 style={styles.sectionTitle}>Témoignages de nos clients</h2>
          <div style={styles.subSection}>
            <p style={styles.subSectionDescription}>"Grâce à leurs services, j'ai pu récupérer mes points de permis rapidement et sans tracas. Je les recommande vivement !" - Jean Dupont</p>
          </div>
          <div style={styles.subSection}>
            <p style={styles.subSectionDescription}>"Une équipe professionnelle et compétente. J'ai pu renforcer mes connaissances en conduite responsable grâce à leurs formations." - Marie Martin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionBox: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subSection: {
    marginBottom: '20px',
  },
  subSectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subSectionDescription: {
    marginBottom: '10px',
  },
  button: {
    display: 'inline-block',
    background: '#EE6C4D',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease-in-out',
    marginRight: '10px',
  },
  offerButton: {
    display: 'inline-block',
    background: '#EE6C4D',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease-in-out',
    marginRight: '10px',
  },
};

export default MainSection;



