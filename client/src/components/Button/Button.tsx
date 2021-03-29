import React, { ReactNode } from 'react'
import styles from './Button.module.css'

interface Props {
  text?: string;
  classes: string[];
  children?: ReactNode
  onClick?: any
}

const Button = ({ text, classes, children, onClick }: Props) => {
  let buttonClasses = [styles.button, ...classes].join(' ')
  return (<button onClick={onClick} className={buttonClasses}>{children || text}</button>)
}

export default Button
