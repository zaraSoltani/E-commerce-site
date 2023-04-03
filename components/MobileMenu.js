import React from "react";
import Link from "next/link";
import styles from "../styles/MobileMenu.module.css";

export default function MobileMenu({ links, close }) {
  return (
    <div className={styles.container}>
      <button onClick={close}>X</button>
      <ul>
        {links.map((link) => (
          <li>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
