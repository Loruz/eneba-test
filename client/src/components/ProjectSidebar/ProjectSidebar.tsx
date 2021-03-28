import React, { FC } from 'react'
import styles from './ProjectSidebar.module.css'
import MessageForm from '../MessageForm/MessageForm'

const ProjectSidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Lorem ipsum dolor</h2>
      <div className={styles.message}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
      </div>
      <MessageForm/>
    </div>
  )
}

export default ProjectSidebar
