
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Tv,
  Bike,
  Zap,
  Wrench,
  Gift,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  MOCK_PRIZES_DATA,
  MOCK_AWARDS_CAROUSEL,
} from '../../config/mockData';
import styles from './PrizesSection.module.css';

// Select the corresponding Lucide icon for each award.
const getAwardIcon = (place: string) => {
  if (place.includes('1er')) {
    return <Bike size={36} className={styles.awardIcon} />;
  }

  if (place.includes('2do')) {
    return <Zap size={36} className={styles.awardIcon} />;
  }

  return <Tv size={36} className={styles.awardIcon} />;
};

export const PrizesSection: React.FC = () => {
  // Initialize Embla Carousel.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Navigate to the previous slide.
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  // Navigate to the next slide.
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Navigate directly to a specific slide.
  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  // Keep pagination synchronized with Embla.
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className={styles.section} id="premios">
      <div className={styles.container}>

        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {MOCK_PRIZES_DATA.title}
          </h2>

          <p className={styles.subtitle}>
            {MOCK_PRIZES_DATA.subtitle}
          </p>
        </div>

        {/* Existing awards grid */}
        <div className={styles.awardsGrid}>
          {MOCK_PRIZES_DATA.awards.map((award, idx) => (
            <div
              key={idx}
              className={`${styles.awardCard} ${
                styles[`rank${idx + 1}`]
              }`}
            >
              <div className={styles.badge}>
                {award.badge}
              </div>

              <div className={styles.iconContainer}>
                {getAwardIcon(award.place)}
              </div>

              <span className={styles.placeTag}>
                {award.place}
              </span>

              <h3 className={styles.prizeItemName}>
                {award.item}
              </h3>
            </div>
          ))}
        </div>

        {/* Embla awards image carousel */}
        <div
          className={styles.carouselSection}
          aria-label="Galería de imágenes de los premios"
        >
          <h3 className={styles.carouselTitle}>
            Conoce los premios
          </h3>

          <div className={styles.carousel}>
            <button
              type="button"
              className={styles.carouselButton}
              onClick={scrollPrev}
              aria-label="Ver premio anterior"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>

            {/* Embla viewport */}
            <div
              className={styles.emblaViewport}
              ref={emblaRef}
              aria-roledescription="carrusel"
              aria-label="Premios de la carrera"
            >
              {/* Embla slide container */}
              <div className={styles.emblaContainer}>
                {MOCK_AWARDS_CAROUSEL.map((award) => (
                  <div
                    key={award.id}
                    className={styles.emblaSlide}
                    role="group"
                    aria-roledescription="diapositiva"
                  >
                    <div className={styles.carouselSlide}>
                      <img
                        src={award.imageUrl}
                        alt={award.alt}
                        className={styles.carouselImage}
                        loading="lazy"
                        draggable={false}
                      />

                      <div className={styles.carouselCaption}>
                        <span>{award.place}</span>

                        <h4>{award.title}</h4>

                        <p>Imagen ilustrativa</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={styles.carouselButton}
              onClick={scrollNext}
              aria-label="Ver siguiente premio"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Pagination dots */}
          <div
            className={styles.carouselDots}
            aria-label="Seleccionar premio"
          >
            {MOCK_AWARDS_CAROUSEL.map((award, index) => (
              <button
                key={award.id}
                type="button"
                onClick={() => scrollTo(index)}
                className={`${styles.carouselDot} ${
                  selectedIndex === index
                    ? styles.carouselDotActive
                    : ''
                }`}
                aria-label={`Mostrar ${award.title}`}
                aria-current={
                  selectedIndex === index
                    ? 'true'
                    : undefined
                }
              />
            ))}
          </div>
        </div>

        {/* Existing raffle section */}
        <div className={styles.raffleBox}>
          <div className={styles.raffleHeader}>
            <div className={styles.amountBadge}>
              {MOCK_PRIZES_DATA.raffleTotalAmount} en regalos
            </div>

            <h3 className={styles.raffleTitle}>
              {MOCK_PRIZES_DATA.raffleTitle}
            </h3>

            <p className={styles.raffleSubtitle}>
              {MOCK_PRIZES_DATA.raffleSubtitle}
            </p>
          </div>

          <div className={styles.raffleGrid}>
            <div className={styles.raffleCategoryCard}>
              <div className={styles.categoryHeader}>
                <Gift size={24} className={styles.catIcon} />

                <h4>
                  {MOCK_PRIZES_DATA.raffleCategories[0].title}
                </h4>
              </div>

              <p className={styles.catDesc}>
                {MOCK_PRIZES_DATA.raffleCategories[0].description}
              </p>

              <ul className={styles.itemList}>
                {MOCK_PRIZES_DATA.raffleCategories[0].items.map(
                  (it, i) => (
                    <li key={i}>• {it}</li>
                  )
                )}
              </ul>
            </div>

            <div className={styles.raffleCategoryCard}>
              <div className={styles.categoryHeader}>
                <Wrench size={24} className={styles.catIcon} />

                <h4>
                  {MOCK_PRIZES_DATA.raffleCategories[1].title}
                </h4>
              </div>

              <p className={styles.catDesc}>
                {MOCK_PRIZES_DATA.raffleCategories[1].description}
              </p>

              <ul className={styles.itemList}>
                {MOCK_PRIZES_DATA.raffleCategories[1].items.map(
                  (it, i) => (
                    <li key={i}>• {it}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
