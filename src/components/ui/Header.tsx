
import React, { useState } from 'react';
import styles from './css/Header.module.css';

interface HeaderProps {
  logoUrl?: string;
  logoAlt?: string;
}

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Kit del corredor', href: '#kit' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Causa social', href: '#causa-social' },
  { label: 'Premios', href: '#premios' },
  { label: 'Patrocinadores', href: '#patrocinadores' },
];

export const Header: React.FC<HeaderProps> = ({
  logoUrl,
  logoAlt = '3ª Carrera Cruz Azul Guadalajara 2026',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.appHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.logoSection}>
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={logoAlt}
              className={styles.logoImage}
            />
          ) : (
            <>
              <span className={styles.logoBadge}>
                CORPORACIÓN AZUL • CEMENTO CRUZ AZUL
              </span>
              <h1 className={styles.logoTitle}>
                3ª CARRERA CRUZ AZUL GUADALAJARA 2026
              </h1>
            </>
          )}
        </div>

        <button
          type="button"
          className={styles.hamburgerBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen ? 'Cerrar menú' : 'Abrir menú'
          }
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span
            className={`${styles.bar} ${
              isMenuOpen ? styles.barOpenTop : ''
            }`}
          />
          <span
            className={`${styles.bar} ${
              isMenuOpen ? styles.barOpenMiddle : ''
            }`}
          />
          <span
            className={`${styles.bar} ${
              isMenuOpen ? styles.barOpenBottom : ''
            }`}
          />
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          className={`${styles.mainNav} ${
            isMenuOpen ? styles.mainNavActive : ''
          }`}
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className={styles.navCtaItem}>
              <a
                href="#inscripcion"
                className={styles.ctaButton}
                onClick={closeMenu}
              >
                Inscribirme ($250 MXN)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
