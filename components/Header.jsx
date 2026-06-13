"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoMark}>EA</span>
          <span className={styles.logoText}>
            Ehsan
            <span className={styles.logoSub}>Real Estate Ops &amp; AI Support</span>
          </span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.mobileCtaItem}>
              <Link href="/contact" className={styles.mobileCta} onClick={closeMenu}>
                Start free trial
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.cta}>
            Start free trial
          </Link>

          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

