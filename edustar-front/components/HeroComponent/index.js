import styles from './styles.module.css';

const HeroComponent = ({ }) => (
    <div className="hero">
        <h1 className={styles.title}>Verified education</h1>
        <h1 className={styles.gradient}>with blockchain</h1>
        {/* <p className={styles.subtitle}>{subtitle}</p> */}
    </div>
);

export default HeroComponent;