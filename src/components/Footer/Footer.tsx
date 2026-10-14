
import { Globe, Camera, Play } from 'lucide-react';
import styles from './Footer.module.css';

const QUICK_LINKS = [
  { label: 'Detalles', href: '#detalles' },
  { label: 'Kit del corredor', href: '#kit' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Premios', href: '#premios' },
  { label: 'Patrocinadores', href: '#patrocinadores' },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2 className={styles.title}>
              3ª CARRERA CRUZ AZUL
            </h2>

            <p className={styles.location}>
              GUADALAJARA 2026
            </p>

            <p className={styles.description}>
              Corre con causa. Construyamos juntos
              una mejor comunidad.
            </p>
          </div>

          <nav
            className={styles.navigation}
            aria-label="Navegación del pie de página"
          >
            <h3 className={styles.heading}>
              Enlaces rápidos
            </h3>

            <ul className={styles.links}>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.social}>
            <h3 className={styles.heading}>
              Síguenos
            </h3>

            <div className={styles.socialIcons}>
            <Globe aria-label="Facebook" />
            <Camera aria-label="Instagram" />
            <Play aria-label="YouTube" />
            </div>

            <p className={styles.socialText}>
              Redes oficiales del evento
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} 3ª Carrera
            Cruz Azul Guadalajara.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
