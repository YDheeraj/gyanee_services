import styles from "../styles/navbar.module.css";

export default function MobileMenu({ onClose }) {
  return (
    <div className={styles.mobileMenu}>
      <button className={styles.closeBtn} onClick={onClose}>×</button>
      <ul>
        <li><a href="/" onClick={onClose}>Home</a></li>
        <li><a href="/about" onClick={onClose}>About Us</a></li>
        <li><a href="/services" onClick={onClose}>Services</a></li>
        <li><a href="/contact" onClick={onClose}>Contact Us</a></li>
      </ul>
    </div>
  );
}
