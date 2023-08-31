import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import heroImage from '../../assets/images/hero.png';
import heroSmallImage from '../../assets/images/hero_small.webp';
import heroMediumImage from '../../assets/images/hero_medium.webp';
import heroLargeImage from '../../assets/images/hero_large.webp';
import heroExtraLargeImage from '../../assets/images/hero_extra_large.webp';
import trendingVideo from '../../assets/images/trending.mp4';
import findVideo from '../../assets/images/find.mp4';
import freeVideo from '../../assets/images/free.mp4';

import FeatureItem from './components/FeatureItem/FeatureItem';
import CustomCursor from './components/CustomCursor/CustomCursor';
import AnimatedPath from './components/AnimatedPath/AnimatedPath';

import styles from './Home.module.css';

const heroImageSrcSet = `${heroSmallImage} 500w, ${heroMediumImage} 1000w, ${heroLargeImage} 1500w, ${heroExtraLargeImage} 2000w`;

const Home = () => {
  const wrapperRef = useRef<HTMLElement>(null);

  return (
    <>
      <section className={styles.heroSection}>
        <picture>
          <source type="image/webp" srcSet={heroImageSrcSet} />
          <img className={styles.heroImage} src={heroImage} alt="hero image" />
        </picture>
        <div className={styles.projectTitle}>
          <h1 className={styles.title}>Memegle</h1>
          <h3 className={styles.subtitle}>gif search engine for you</h3>
        </div>
        <Link to="/search">
          <button className={classNames(styles.cta, styles.linkButton)}>start search</button>
        </Link>
      </section>
      <section ref={wrapperRef} className={styles.featureSection}>
        <AnimatedPath wrapperRef={wrapperRef} />
        <div className={styles.featureSectionWrapper}>
          <h2 className={styles.featureTitle}>Features</h2>
          <div className={styles.featureItemContainer}>
            <FeatureItem title="See trending gif" imageSrc={trendingVideo} />
            <FeatureItem title="Find gif for free" imageSrc={findVideo} />
            <FeatureItem title="Free for everyone" imageSrc={freeVideo} />
          </div>
          <Link to="/search">
            <button className={styles.linkButton}>start search</button>
          </Link>
        </div>
      </section>
      <CustomCursor text="memegle" />
    </>
  );
};

export default Home;
