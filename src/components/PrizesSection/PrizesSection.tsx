import React from 'react';
import { Tv, Bike, Zap, Wrench, Gift } from 'lucide-react';
import { MOCK_PRIZES_DATA } from '../../config/mockData';
import styles from './PrizesSection.module.css';

const getAwardIcon = (place: string) => {
  if (place.includes('1er')) return <Bike size={36} className={styles.awardIcon} />;
  if (place.includes('2do')) return <Zap size={36} className={styles.awardIcon} />;
  return <Tv size={36} className={styles.awardIcon} />;
};

export const PrizesSection: React.FC = () => {
  return (
    <section className={styles.section} id="premios">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{MOCK_PRIZES_DATA.title}</h2>
          <p className={styles.subtitle}>{MOCK_PRIZES_DATA.subtitle}</p>
        </div>

        <div className={styles.awardsGrid}>
          {MOCK_PRIZES_DATA.awards.map((award, idx) => (
            <div key={idx} className={`${styles.awardCard} ${styles[`rank${idx + 1}`]}`}>
              <div className={styles.badge}>{award.badge}</div>
              <div className={styles.iconContainer}>{getAwardIcon(award.place)}</div>
              <span className={styles.placeTag}>{award.place}</span>
              <h3 className={styles.prizeItemName}>{award.item}</h3>
            </div>
          ))}
        </div>

        <div className={styles.raffleBox}>
          <div className={styles.raffleHeader}>
            <div className={styles.amountBadge}>{MOCK_PRIZES_DATA.raffleTotalAmount} en regalos</div>
            <h3 className={styles.raffleTitle}>{MOCK_PRIZES_DATA.raffleTitle}</h3>
            <p className={styles.raffleSubtitle}>{MOCK_PRIZES_DATA.raffleSubtitle}</p>
          </div>

          <div className={styles.raffleGrid}>
            <div className={styles.raffleCategoryCard}>
              <div className={styles.categoryHeader}>
                <Gift size={24} className={styles.catIcon} />
                <h4>{MOCK_PRIZES_DATA.raffleCategories[0].title}</h4>
              </div>
              <p className={styles.catDesc}>{MOCK_PRIZES_DATA.raffleCategories[0].description}</p>
              <ul className={styles.itemList}>
                {MOCK_PRIZES_DATA.raffleCategories[0].items.map((it, i) => (
                  <li key={i}>• {it}</li>
                ))}
              </ul>
            </div>

            <div className={styles.raffleCategoryCard}>
              <div className={styles.categoryHeader}>
                <Wrench size={24} className={styles.catIcon} />
                <h4>{MOCK_PRIZES_DATA.raffleCategories[1].title}</h4>
              </div>
              <p className={styles.catDesc}>{MOCK_PRIZES_DATA.raffleCategories[1].description}</p>
              <ul className={styles.itemList}>
                {MOCK_PRIZES_DATA.raffleCategories[1].items.map((it, i) => (
                  <li key={i}>• {it}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};