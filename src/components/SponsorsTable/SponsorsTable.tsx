import React from 'react';
import { Check, X } from 'lucide-react';
import { MOCK_SPONSORS_DATA } from '../../config/mockData';
import styles from './SponsorsTable.module.css';

export const SponsorsTable: React.FC = () => {
  return (
    <section className={styles.section} id="patrocinadores">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{MOCK_SPONSORS_DATA.title}</h2>
          <p className={styles.subtitle}>{MOCK_SPONSORS_DATA.subtitle}</p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.benefitColumnHeader}>Beneficios</th>
                {MOCK_SPONSORS_DATA.tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className={`${styles.tierHeader} ${tier.highlighted ? styles.highlightedTier : ''}`}
                  >
                    <div className={styles.tierName}>{tier.name}</div>
                    <div className={styles.tierPrice}>{tier.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MOCK_SPONSORS_DATA.benefitLabels.map((benefit) => (
                <tr key={benefit.key}>
                  <td className={styles.benefitLabel}>{benefit.label}</td>
                  {MOCK_SPONSORS_DATA.tiers.map((tier) => (
                    <td
                      key={`${tier.id}-${benefit.key}`}
                      className={`${styles.cell} ${tier.highlighted ? styles.highlightedCell : ''}`}
                    >
                      {tier.benefits.includes(benefit.key) ? (
                        <span className={styles.checkIcon}>
                          <Check size={20} />
                        </span>
                      ) : (
                        <span className={styles.xIcon}>
                          <X size={20} />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className={styles.benefitLabel}>Inscripciones cortesía para tu equipo</td>
                {MOCK_SPONSORS_DATA.tiers.map((tier) => (
                  <td
                    key={`${tier.id}-inscriptions`}
                    className={`${styles.cell} ${styles.inscriptionsCell} ${
                      tier.highlighted ? styles.highlightedCell : ''
                    }`}
                  >
                    {tier.courtesyInscriptions}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className={styles.footerNote}>
          * Beneficios sujetos a disponibilidad y aprobación del comité organizador.
        </p>
      </div>
    </section>
  );
};