import styles from "../styles/Hero.module.css";

function Hero({ title, image }) {
  return (
    <div className={styles.hero}>
      <img src={image.url} alt={image.alt} className={styles.heroImage} />
      <h1>{title}</h1>
    </div>
  );
}

export default Hero;
