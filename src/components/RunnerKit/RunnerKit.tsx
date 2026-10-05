import React from 'react';
import { Shirt, Tag, Award, ShoppingBag, Package } from 'lucide-react';
import { MOCK_KIT_ITEMS } from '../../config/mockData';
import styles from './RunnerKit.module.css';

const ICON_MAP: Record<string, React.ElementType> = {
  shirt: Shirt,
  tag: Tag,
  award: Award,
  bag: ShoppingBag,
};

export const RunnerKit: React.FC = () => {
  return (
    <section className={styles.section} id="kit">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Kit del Corredor</h2>
          <p className={styles.subtitle}>
            Todo lo que incluye tu inscripción oficial a la carrera.
          </p>
        </div>

        <div className={styles.grid}>
          {MOCK_KIT_ITEMS.map((item) => {
            const IconComponent = ICON_MAP[item.iconName] || Package;

            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};