import React from 'react';
import { Heart, ExternalLink, PackageCheck, AlertCircle } from 'lucide-react';
import { MOCK_SOCIAL_CAUSE_DATA } from '../../config/mockData';
import styles from './SocialCauseSection.module.css';

export const SocialCauseSection: React.FC = () => {
  return (
    <section className={styles.section} id="causa-social">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <span className={styles.badge}>
              <Heart className={styles.heartIcon} size={16} /> Causa Social
            </span>
            <h2 className={styles.title}>{MOCK_SOCIAL_CAUSE_DATA.title}</h2>
            <p className={styles.subtitle}>
              Donativo en especie a beneficio de{' '}
              <strong>{MOCK_SOCIAL_CAUSE_DATA.organization}</strong>
            </p>
            <a
              href={MOCK_SOCIAL_CAUSE_DATA.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationLink}
            >
              Ubicación Casa Hogar Escalar <ExternalLink size={14} />
            </a>
          </div>

          <p className={styles.description}>{MOCK_SOCIAL_CAUSE_DATA.description}</p>

          <div className={styles.callout}>
            <AlertCircle size={20} className={styles.calloutIcon} />
            <span>{MOCK_SOCIAL_CAUSE_DATA.impactMessage}</span>
          </div>

          <div className={styles.itemsBlock}>
            <h3 className={styles.itemsHeading}>Donativos requeridos (Artículos de primera necesidad):</h3>
            <ul className={styles.itemsGrid}>
              {MOCK_SOCIAL_CAUSE_DATA.itemsNeeded.map((item, index) => (
                <li key={index} className={styles.itemCard}>
                  <PackageCheck size={18} className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};