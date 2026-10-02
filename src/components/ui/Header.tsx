import React from "react";

export const Header: React.FC = () => {
   return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo-section">
          <span className="logo-badge">3ª Carrera</span>
          <h1 className="logo-title">Cruz Azul Guadalajara 2026</h1>
        </div>

        <nav className="main-nav">
          <ul>
            <li><a href="#overview">Detalles</a></li>
            <li><a href="#kit">Kit de Corredor</a></li>
            <li><a href="#location">Ubicación</a></li>
            <li><a href="#prizes">Premios</a></li>
            <li><a href="#sponsors">Patrocinadores</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#register" className="cta-button">
            Inscribirme ($250 MXN)
          </a>
        </div>
      </div>
    </header>
  ); 
}
