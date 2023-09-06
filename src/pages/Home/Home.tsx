import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet';

import heroImage from '../../assets/images/hero.webp';
import trendingGif from '../../assets/images/trending.mp4';
import findGif from '../../assets/images/find.mp4';
import freeGif from '../../assets/images/free.mp4';

import FeatureItem from './components/FeatureItem/FeatureItem';
import CustomCursor from './components/CustomCursor/CustomCursor';
import AnimatedPath from './components/AnimatedPath/AnimatedPath';

import styles from './Home.module.css';

const Home = () => {
  const wrapperRef = useRef<HTMLElement>(null);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" type="image/webp" href={heroImage} />
      </Helmet>
      <section className={styles.heroSection}>
        <img className={styles.heroImage} src={heroImage} alt="hero image" />
        <div className={styles.projectTitle}>
          <h1 className={styles.title}>Memegle</h1>
          <h2 className={styles.subtitle}>gif search engine for you</h2>
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
            <FeatureItem
              title="See trending gif"
              imageSrc={trendingGif}
              alt="Spongebob holding up his thumb"
            />
            <FeatureItem
              title="Find gif for free"
              imageSrc={findGif}
              alt="moneky searching for food"
            />
            <FeatureItem
              title="Free for everyone"
              imageSrc={freeGif}
              alt="Mr.crab looking at cash"
            />
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
