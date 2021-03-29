import React, { FC, useEffect, useState } from 'react'
import styles from './AppNavigation.module.css'
import mainLogo from '../../assets/images/main-logo.svg'
import { useQuery } from '@apollo/client'
import { LOAD_NAVIGATION_LINKS } from '../../graphql/queries'

interface NavigationLink {
  title: string;
  href: string
}

const AppNavigation: FC = () => {
  const { error, data } = useQuery(LOAD_NAVIGATION_LINKS)
  const [links, setLinks] = useState<NavigationLink[]>([])

  useEffect(() => {
    if (error) {
      return console.error('Error fetching navigation links')
    }
    if (data && data.links) {
      let links = [...data.links]
      let splicedLinks = [...links.splice(1, links.length)]
      setLinks(splicedLinks)
    }
  }, [data])

  const navigationLinks = links.map((link: NavigationLink) => {
    return (
      <li className={styles.listItem} key={link.title}>
        <a href={link.href} className={styles.link}>{link.title}</a>
      </li>
    )
  })
  return (
    <header className={styles.header}>
      <div className={styles.innerContainer}>
        <img className={styles.logo} src={mainLogo} alt='Logo'/>
        <div className={styles.rightSide}>
          <ul className={styles.linkList}>
            {navigationLinks}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default AppNavigation
