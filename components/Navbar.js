// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Cyber pulse effect
  useEffect(() => {
    const logo = document.querySelector(`.${styles.brand}`);
    if (!logo) return;

    const pulse = setInterval(() => {
      logo.style.animation = `${styles.gradientFlow} 8s ease infinite, ${styles.cyberPulse} 3s ease 1`;
      setTimeout(() => {
        logo.style.animation = `${styles.gradientFlow} 8s ease infinite`;
      }, 3000);
    }, 15000);

    return () => clearInterval(pulse);
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.animationDuration = '4s, 1.5s';
    e.currentTarget.style.animationTimingFunction = 'linear, ease-out';
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.animationDuration = '8s';
    e.currentTarget.style.animationTimingFunction = 'ease';
  };

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <a href="mailto:support@notsecure.in" className={styles.topLink}>
              <i className="bi bi-envelope"></i> support@notsecure.in
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/company/not-secure/" className={styles.socialIcon} aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/notsec/" className={styles.socialIcon} aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/notsecure_in/" className={styles.socialIcon} aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.mainNavbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            NOT SECURE
          </Link>

          <button
            className={styles.toggler}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={styles.togglerIcon}></span>
          </button>

          <div className={`${styles.collapse} ${isOpen ? styles.show : ''}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/research" className={styles.navLink}>Research</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/product" className={styles.navLink}>Product</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about" className={styles.navLink}>About</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/service" className={styles.navLink}>Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;