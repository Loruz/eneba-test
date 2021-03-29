import React, { ReactNode } from 'react'
import styles from './AppMobileNavigation.module.css'
import Button from '../Button/Button'

interface Props {
  children?: ReactNode,
  toggleSidebar: (value: boolean) => void
}

const AppMobileNavigation = ({ children, toggleSidebar }: Props) => {
  return (
    <nav>
      <div className={styles.backdrop} onClick={() => toggleSidebar(false)}/>
      <div className={styles.navigation}>
        <Button classes={[styles.closeButton]} onClick={() => toggleSidebar(false)}>
          <svg className=""
               width="14"
               height="14"
               viewBox="0 0 14 14"
               style={{ maxWidth: '14px', minWidth: '14px', height: 'auto' }}>
            <path fill="#FFF"
                  fill-rule="evenodd"
                  d="M14 1.67L12.59.31 7 5.69 1.41.31 0 1.67l5.59 5.37L0 12.42l1.41 1.36L7 8.4l5.59 5.38L14 12.42 8.41 7.04z"/>
          </svg>
        </Button>
        {children}
      </div>
    </nav>)
}

export default AppMobileNavigation
