import React, { FC } from 'react'
import styles from './AppNavigation.module.css'
import mainLogo from '../../assets/images/main-logo.svg'

const AppNavigation: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.innerContainer}>
        <img className={styles.logo} src={mainLogo} alt='Logo'/>
        <div className={styles.rightSide}>
          <ul className={styles.linkList}>
            <li className={styles.listItem}>
              <a href="/#" className={styles.link}>Projects</a>
            </li>
            <li className={styles.listItem}>
              <a href="/#" className={styles.link}>About us</a>
            </li>
            <li className={styles.listItem}>
              <a href="/#" className={styles.link}>Testimonials</a>
            </li>
            <li className={styles.listItem}>
              <a href="/#" className={styles.link}>Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default AppNavigation
