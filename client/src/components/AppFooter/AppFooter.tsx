import React, { FC } from 'react'
import styles from './AppFooter.module.css'
import linkIcon from '../../assets/images/footer-link-icon.png'

const AppFooter: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.innerContainer}>
        <ul className={styles.linkList}>
          <li className={styles.listItem}>
            <a href="/#" className={styles.link}>Home</a>
            <img src={linkIcon} alt="linkIcon" className={styles.linkIcon}/>
          </li>
          <li className={styles.listItem}>
            <a href="/#" className={styles.link}>Projects</a>
            <img src={linkIcon} alt="linkIcon" className={styles.linkIcon}/>
          </li>
          <li className={styles.listItem}>
            <a href="/#" className={styles.link}>About us</a>
            <img src={linkIcon} alt="linkIcon" className={styles.linkIcon}/>
          </li>
          <li className={styles.listItem}>
            <a href="/#" className={styles.link}>Testimonials</a>
            <img src={linkIcon} alt="linkIcon" className={styles.linkIcon}/>
          </li>
          <li className={styles.listItem}>
            <a href="/#" className={styles.link}>Contacts</a>
            <img src={linkIcon} alt="linkIcon" className={styles.linkIcon}/>
          </li>
        </ul>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
        </div>
      </div>
    </div>
  )
}
export default AppFooter
