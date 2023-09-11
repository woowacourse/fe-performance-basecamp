import styles from './FeatureItem.module.css';

type FeatureItemProps = {
  title: string;
  webmSrc: string;
  mp4Src: string;
};

const FeatureItem = ({ title, webmSrc, mp4Src }: FeatureItemProps) => {
  return (
    <div className={styles.featureItem}>
      <video autoPlay loop muted playsInline className={styles.featureImage}>
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>
      <div className={styles.featureTitleBg}></div>
      <h4 className={styles.featureTitle}>{title}</h4>
    </div>
  );
};

export default FeatureItem;
