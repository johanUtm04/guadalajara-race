import React from 'react';
import styles from './css/EventOverview.module.css';

interface RaceCategory {
  distance: string;
  branches: string;
}

const CATEGORIES: RaceCategory[] = [
  { distance: '10K', branches: 'Varonil y Femenil (Cualquier edad)' },
  { distance: '5K', branches: 'Varonil y Femenil (Cualquier edad)' },
];

export const EventOverview: React.FC = () => {
  return (
    <section className={styles.section} id="convocatoria">
      <h2 className={styles.title}>CONVOCATORIA</h2>
      
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>DATOS GENERALES</h3>
          <ul className={styles.list}>
            <li><strong>Distancias:</strong> 10K y 5K</li>
            <li>
              <strong>Costo de inscripción:</strong>{' '}
              <span className={styles.badge}>$250 MXN</span>
            </li>
            <li>
              <strong>Cupo límite:</strong>{' '}
              <span className={styles.highlight}>500 corredores</span>
            </li>
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>CATEGORÍAS</h3>
          <ul className={styles.list}>
            {CATEGORIES.map((cat) => (
              <li key={cat.distance}>
                <strong>{cat.distance}:</strong> {cat.branches}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};