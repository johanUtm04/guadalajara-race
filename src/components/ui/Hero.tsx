import React from 'react';
import styles from './css/Hero.module.css';
import { useCountdown } from '../../hooks/useCountdown';

interface HeroProps {
  eventDateIso: string;
}

export const Hero: React.FC<HeroProps> = ({ eventDateIso }) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(eventDateIso);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>3ª CARRERA CRUZ AZUL GUADALAJARA 2026</h1>
        <p className={styles.heroSubtitle}>¡Corre por una gran causa!</p>

        {isExpired ? (
          <div className={styles.countdownExpired}>¡El evento ha comenzado!</div>
        ) : (
          <div className={styles.countdownContainer}>
            <div className={styles.timeBox}>
              <span className={styles.timeValue}>{days}</span>
              <span className={styles.timeLabel}>Días</span>
            </div>
            <div className={styles.timeBox}>
              <span className={styles.timeValue}>{hours}</span>
              <span className={styles.timeLabel}>Horas</span>
            </div>
            <div className={styles.timeBox}>
              <span className={styles.timeValue}>{minutes}</span>
              <span className={styles.timeLabel}>Minutos</span>
            </div>
            <div className={styles.timeBox}>
              <span className={styles.timeValue}>{seconds}</span>
              <span className={styles.timeLabel}>Segundos</span>
            </div>
          </div>
        )}

        <div className={styles.heroCta}>
          <a href="#inscripcion" className={styles.ctaButton}>
            Inscribirme
          </a>
        </div>
      </div>
    </section>
  );
};