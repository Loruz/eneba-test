import React, { FC } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectSidebar from '../ProjectSidebar/ProjectSidebar'
import styles from './ProjectPage.module.css'
import TestimonialList from '../TestimonialList/TestimonialList'
import { useQuery } from '@apollo/client'
import { LOAD_PROJECTS } from '../../graphql/queries'

const ProjectPage: FC = () => {
  const { loading, data, refetch } = useQuery(LOAD_PROJECTS)

  function getNewMessages () {
    refetch().catch(err => {throw new Error(err)})
  }

  if (loading) return null
  //Project could be selected from dropdown and passed trough route params or context
  let selectedProject = data.projects[0]

  return (
    <main className={styles.main}>
      <section className={styles.page}>
        {data.projects.length && <ProjectCard project={selectedProject}/>}
        <ProjectSidebar sidebarData={{ messages: data.messages, sidebarTitle: data.sidebarTitle }}
                        getNewMessages={getNewMessages}/>
      </section>
      <TestimonialList/>
    </main>
  )
}

export default ProjectPage
