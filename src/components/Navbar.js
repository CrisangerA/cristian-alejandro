import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Navbar.module.css';
import sharedStyles from '../../styles/Shared.module.css';
export default function Navbar() {
  return (
    <div className={`${styles.navbar} ${sharedStyles.card1}`}>
      <Link href="/skills">
        <p>SKILLS</p>
      </Link>
      <Link href="/projects">
        <p>PROJECTS</p>
      </Link>
      <Link href="/contact">
        <p>CONTACT</p>
      </Link>
    </div>
  )
}
