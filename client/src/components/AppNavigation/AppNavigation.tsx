import React, { FC, useState } from 'react'
import styles from './AppNavigation.module.css'
import mainLogo from '../../assets/images/main-logo.svg'
import { useQuery } from '@apollo/client'
import { LOAD_NAVIGATION_LINKS } from '../../graphql/queries'
import Button from '../Button/Button'
import AppMobileNavigation from './AppMobileNavigation'

interface NavigationLink {
  title: string;
  href: string,
  component: string;
  innerLinks: [Partial<NavigationLink>]
}

const AppNavigation: FC = () => {
  const { data, loading } = useQuery(LOAD_NAVIGATION_LINKS)
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  if (loading) return null

  let links = [...data.links]
  let splicedLinks = [...links.splice(1, links.length)]

  const navigationLinks = splicedLinks.map((link: NavigationLink) => {
    return (
      <li className={styles.listItem} key={link.title}>
        <a href={link.href} className={styles.link}>{link.title}</a>
        {link.component === 'dropdown' &&
        <ul className={styles.dropdown}>
          {
            link.innerLinks.map((innerLink: Partial<NavigationLink>) => {
              return (
                <li className={styles.dropdownItem}>
                  <a href={innerLink.href} className={styles.dropdownLink}>{innerLink.title}
                  </a>
                </li>
              )
            })
          }
        </ul>}
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
        <Button onClick={() => setShowSidebar(true)} classes={[styles.burgerTrigger]}>
          <span/>
        </Button>
        {showSidebar && <AppMobileNavigation toggleSidebar={setShowSidebar}>
          <ul className={styles.linkList}>
            {navigationLinks}
          </ul>
        </AppMobileNavigation>}

      </div>
    </header>
  )
}

export default AppNavigation
