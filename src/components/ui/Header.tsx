import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Branding Oficial */}
        <div className="logo-section">
          <span className="logo-badge">
            Corporación Azul • Cemento Cruz Azul
          </span>
          <h1 className="logo-title">3ª Carrera Cruz Azul Guadalajara 2026</h1>
        </div>

        <button 
          className="hamburger-btn" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#detalles" onClick={() => setIsMenuOpen(false)}>
                Detalles
              </a>
            </li>
            <li>
              <a href="#kit" onClick={() => setIsMenuOpen(false)}>
                Kit de Corredor
              </a>
            </li>
            <li>
              <a href="#ubicacion" onClick={() => setIsMenuOpen(false)}>
                Ubicación
              </a>
            </li>
            <li>
              <a href="#premios" onClick={() => setIsMenuOpen(false)}>
                Premios
              </a>
            </li>
            <li>
              <a href="#patrocinadores" onClick={() => setIsMenuOpen(false)}>
                Patrocinadores
              </a>
            </li>
            <li className="nav-cta-item">
              <a 
                href="#inscribirme" 
                className="cta-button"
                onClick={() => setIsMenuOpen(false)}
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