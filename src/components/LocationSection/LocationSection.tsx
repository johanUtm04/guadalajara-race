import React, { useState } from 'react';
import { MapPin, Car, ExternalLink, Info } from 'lucide-react';
import { MOCK_LOCATION_DATA } from '../../config/mockData';
import styles from './LocationSection.module.css';

export const LocationSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(
    MOCK_LOCATION_DATA.parkings[0].id
  );

  const activeParking = MOCK_LOCATION_DATA.parkings.find(
    (p) => p.id === activeTabId
  ) || MOCK_LOCATION_DATA.parkings[0];

  return (
    <section className={styles.section} id="ubicacion">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Ubicación y Estacionamiento</h2>
          <p className={styles.subtitle}>
            {MOCK_LOCATION_DATA.venueName} — {MOCK_LOCATION_DATA.address}
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.mapCard}>
            <div className={styles.cardHeader}>
              <MapPin className={styles.headerIcon} />
              <h3>Mapa del Evento</h3>
            </div>
            <div className={styles.iframeWrapper}>
              <iframe
                title="Ubicación del evento"
                src={MOCK_LOCATION_DATA.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className={styles.parkingCard}>
            <div className={styles.cardHeader}>
              <Car className={styles.headerIcon} />
              <h3>Opciones de Estacionamiento</h3>
            </div>

            <div className={styles.tabsContainer}>
              {MOCK_LOCATION_DATA.parkings.map((parking) => (
                <button
                  key={parking.id}
                  className={`${styles.tabButton} ${
                    activeTabId === parking.id ? styles.activeTab : ''
                  }`}
                  onClick={() => setActiveTabId(parking.id)}
                  type="button"
                >
                  {parking.name.split(' - ')[0]}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              <h4 className={styles.parkingTitle}>{activeParking.name}</h4>
              <div className={styles.infoBadge}>
                <Info size={16} />
                <span>Capacidad estimada: <strong>{activeParking.capacity}</strong></span>
              </div>
              <p className={styles.accessNote}>{activeParking.accessNote}</p>

              <a
                href={activeParking.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                Abrir ruta en Google Maps <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};