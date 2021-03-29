import React from 'react'
import styles from './ProjectCard.module.css'

interface Project {
  title: string;
  content: string[];
}

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const contentList = project.content.map((text: string, index: number) => {
    // Dummy key index, could be text id
    return (<p className={styles.text} key={index}>{text}</p>)
  })
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{project.title}</h1>
      {contentList}
    </div>
  )
}

export default ProjectCard
