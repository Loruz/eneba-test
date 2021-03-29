import React, { FC } from 'react'
import { useQuery } from '@apollo/client'
import styles from './AppFooter.module.css'
import separator from '../../assets/images/footer-separator-img.png'
import { LOAD_NAVIGATION_LINKS } from '../../graphql/queries'

interface NavigationLink {
  title: string;
  href: string
}

const AppFooter: FC = () => {
  const { data, loading } = useQuery(LOAD_NAVIGATION_LINKS)

  if (loading) return null

  const footerLinks = data.links.map((link: NavigationLink, index: number) => {
    return (
      <li className={styles.listItem} key={index}>
        <a href={link.href} className={styles.link}>{link.title}</a>
        {(index + 1 !== data.links.length) && <img src={separator} alt="separator" className={styles.separator}/>}
      </li>)
  })

  return (
    <div className={styles.footer}>
      <div className={styles.innerContainer}>
        <ul className={styles.linkList}>
          {footerLinks.length && footerLinks}
        </ul>
        <div className={styles.text}>
          {data.footerContent}
        </div>
      </div>
    </div>
  )
}
export default AppFooter
