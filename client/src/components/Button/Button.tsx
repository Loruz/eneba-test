import React, { ReactNode } from 'react'
import styles from './Button.module.css'

interface Props {
  text?: string;
  classes: string[];
  children?: ReactNode
}

const Button = ({ text, classes, children }: Props) => {
  let buttonClasses = [styles.button, ...classes].join(' ')
  return (<button className={buttonClasses}>{children || text}</button>)
}

export default Button
