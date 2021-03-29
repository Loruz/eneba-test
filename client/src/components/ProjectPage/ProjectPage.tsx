import React, { FC } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectSidebar from '../ProjectSidebar/ProjectSidebar'
import styles from './ProjectPage.module.css'
import TestimonialList from '../TestimonialList/TestimonialList'

const ProjectPage: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.page}>
        <ProjectCard/>
        <ProjectSidebar/>
      </section>
      <TestimonialList/>
    </main>
  )
}

export default ProjectPage
