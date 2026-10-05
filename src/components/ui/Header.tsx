import React, { useState } from 'react';
import styles from './css/Header.module.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.appHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.logoSection}>
          <span className={styles.logoBadge}>CORPORACIÓN AZUL • CEMENTO CRUZ AZUL</span>
          <h1 className={styles.logoTitle}>3ª CARRERA CRUZ AZUL GUADALAJARA 2026</h1>
        </div>

        <button 
          className={styles.hamburgerBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`${styles.bar} ${isMenuOpen ? styles.barOpenTop : ''}`} />
          <span className={`${styles.bar} ${isMenuOpen ? styles.barOpenMiddle : ''}`} />
          <span className={`${styles.bar} ${isMenuOpen ? styles.barOpenBottom : ''}`} />
        </button>

        <nav className={`${styles.mainNav} ${isMenuOpen ? styles.mainNavActive : ''}`}>
          <ul>
            <li><a href="#detalles" onClick={() => setIsMenuOpen(false)}>Detalles</a></li>
            <li><a href="#kit" onClick={() => setIsMenuOpen(false)}>Kit de Corredor</a></li>
            <li><a href="#ubicacion" onClick={() => setIsMenuOpen(false)}>Ubicación</a></li>
            <li><a href="#premios" onClick={() => setIsMenuOpen(false)}>Premios</a></li>
            <li><a href="#patrocinadores" onClick={() => setIsMenuOpen(false)}>Patrocinadores</a></li>
            <li className={styles.navCtaItem}>
              <a href="#inscripcion" className={styles.ctaButton} onClick={() => setIsMenuOpen(false)}>
                Inscribirme ($250 MXN)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};