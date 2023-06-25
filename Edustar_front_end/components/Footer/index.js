import ToggleTheme from '../Theme';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionHeader}>Developers</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">API Reference</a>
            </li>
            <li>
              <a href="#">SDKs and Tools</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionHeader}>Contact</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionHeader}>Resources</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">Whitepaper</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
          </ul>
        </div>
        <ToggleTheme />

      </div>
      
      <span className={styles.toggle}>
      </span>

    </footer>
  );
};

export default Footer;
