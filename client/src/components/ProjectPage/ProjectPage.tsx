import React, { FC } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectSidebar from '../ProjectSidebar/ProjectSidebar'
import styles from './ProjectPage.module.css'

const ProjectPage: FC = () => {
  return (
    <main className={styles.page}>
     <ProjectCard/>
     <ProjectSidebar/>
    </main>
  )
}

export default ProjectPage
