import Link from "next/link";
import React from "react";
import styles from "../../styles/nav-bar.module.css";

const NavLinks = () => {
  return (
    <div>
      <Link href="#">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          Mouse & Keyboards
        </a>
      </Link>
      <Link href="#">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          Processor & Graphic cards
        </a>
      </Link>
      <Link href="#">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          Monitors & Computers
        </a>
      </Link>
      <Link href="https://github.com/AyushSahu77">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          About the developers
        </a>
      </Link>
    </div>
  );
};

export default NavLinks;
