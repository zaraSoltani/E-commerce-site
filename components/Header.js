import Link from "next/link";
import styles from "../styles/Header.module.css";
import MobileMenu from "./MobileMenu";
import { CartButton } from "./CartButton";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const links = [
    { href: "/", title: "HOME" },
    { href: "/collections/all", title: "SHOP" },
    { href: "/about", title: "ABOUT" },
    { href: "/contact", title: "CONTACT" },
  ];

  return (
    <header className={styles.header}>
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
        className={styles.hamburger}
      >
        <img src="../images/menu.svg" />
      </button>

      <div>
        <Link href="/">
          <img src="../images/Logo.svg" alt="My Logo" />
        </Link>
      </div>

      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <ul>
            {links.map((link) => (
              <li>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/cart">
          <CartButton />
        </Link>
      </div>

      {isOpen && <MobileMenu links={links} close={() => setOpen(false)} />}
    </header>
  );
}

export default Header;
