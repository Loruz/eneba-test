import React from 'react'
import styles from './ProjectSidebar.module.css'
import MessageForm from '../MessageForm/MessageForm'

interface Message {
  text: string;
}

interface Props {
  sidebarData: {
    messages: [Message] | [],
    sidebarTitle: string;
  }
  getNewMessages: () => void;
}

const ProjectSidebar = ({ sidebarData, getNewMessages }: Props) => {
  const messageList = sidebarData.messages.map((message: Message, index: number) => {
    // Also dummy index
    return (<div className={styles.message} key={index}>
      {message.text}
    </div>)
  })
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>{sidebarData.sidebarTitle}</h2>
      {messageList}
      <MessageForm getNewMessages={getNewMessages}/>
    </div>
  )
}

export default ProjectSidebar
