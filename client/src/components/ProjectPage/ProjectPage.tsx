import React, { FC, useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectSidebar from '../ProjectSidebar/ProjectSidebar'
import styles from './ProjectPage.module.css'
import TestimonialList from '../TestimonialList/TestimonialList'
import { useQuery } from '@apollo/client'
import { LOAD_PROJECTS } from '../../graphql/queries'

interface Project {
  title: string;
  content: string[];
}

interface Message {
  text: string;
}

interface SidebarData {
  messages: [Message] | [],
  sidebarTitle: string;
}

const ProjectPage: FC = () => {
  const { error, data } = useQuery(LOAD_PROJECTS)
  const [projects, setProjects] = useState<Project[]>([])
  const [sidebarData, setSidebarData] = useState<SidebarData>({ messages: [], sidebarTitle: '' })

  useEffect(() => {
    if (error) {
      return console.error('Error fetching projects')
    }
    if (data) {
      setSidebarData({ messages: data.messages, sidebarTitle: data.sidebarTitle })
      setProjects(data.projects)
    }
  }, [data])

  //Project could be selected from dropdown and passed trough route params or context
  let selectedProject = projects[0]

  return (
    <main className={styles.main}>
      <section className={styles.page}>
        {projects.length && <ProjectCard project={selectedProject}/>}
        <ProjectSidebar sidebarData={sidebarData}/>
      </section>
      <TestimonialList/>
    </main>
  )
}

export default ProjectPage
