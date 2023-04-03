import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoColumn}>
        <img src="../images/Logo.svg" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.followUsColumn}>
        <h3>Follow Us</h3>
        <ul className={styles.socialLinks}>
          <li>
            <a href="#">
              <FaFacebookF />
              Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
              Twitter
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.menuColumn}>
        <h3>Menu</h3>
        <ul className={styles.menuLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <div className={styles.contactUsColumn}>
        <h3>Contact Us</h3>
        <ul className={styles.contactLinks}>
          <li>
            <a href="#">Address:</a>
            <span>Vallgatan 21, 415 06 Göteborg</span>
          </li>
          <li>
            <a href="#">Phone:</a>
            <span>031-435 42 34</span>
          </li>
          <li>
            <a href="#">Email:</a>
            <span>crisp@gmail.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
