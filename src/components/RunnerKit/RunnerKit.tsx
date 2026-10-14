
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

type KitItemImageProps = {
  imageUrl?: string;
  alt: string;
  IconComponent: React.ElementType;
};

const KitItemImage = ({
  imageUrl,
  alt,
  IconComponent,
}: KitItemImageProps) => {
  const [imageError, setImageError] = React.useState(false);

  if (!imageUrl || imageError) {
    return (
      <div className={styles.iconWrapper}>
        <IconComponent
          className={styles.icon}
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className={styles.imageWrapper}>
      <img
        src={imageUrl}
        alt={alt}
        className={styles.itemImage}
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
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
            const IconComponent =
              ICON_MAP[item.iconName] || Package;

            return (
              <div key={item.id} className={styles.card}>
                <KitItemImage
                  key={item.imageUrl ?? item.id}
                  imageUrl={item.imageUrl}
                  alt={item.name}
                  IconComponent={IconComponent}
                />

                <h3 className={styles.itemName}>
                  {item.name}
                </h3>

                <p className={styles.itemDescription}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
