import React, { FC, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import styles from './AppFooter.module.css'
import separator from '../../assets/images/footer-separator-img.png'
import { LOAD_NAVIGATION_LINKS } from '../../graphql/queries'

interface NavigationLink {
  title: string;
  href: string
}

const AppFooter: FC = () => {
  const { error, data } = useQuery(LOAD_NAVIGATION_LINKS)
  const [links, setLinks] = useState<NavigationLink[]>([])
  const [footerContent, setFooterContent] = useState<string>('')

  useEffect(() => {
    if (error) {
      return console.error('Error fetching navigation links')
    }
    if (data) {
      setFooterContent(data.footerContent)
      setLinks(data.links)
    }
  }, [data])

  const footerLinks = links.map((link: NavigationLink, index: number) => {
    return (
      <li className={styles.listItem} key={index}>
        <a href={link.href} className={styles.link}>{link.title}</a>
        {(index + 1 !== links.length) && <img src={separator} alt="separator" className={styles.separator}/>}
      </li>)
  })

  return (
    <div className={styles.footer}>
      <div className={styles.innerContainer}>
        <ul className={styles.linkList}>
          {footerLinks.length && footerLinks}
        </ul>
        <div className={styles.text}>
          {footerContent}
        </div>
      </div>
    </div>
  )
}
export default AppFooter
