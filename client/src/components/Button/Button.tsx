import React from 'react'
import styles from './Button.module.css'

interface Props {
  text: string;
  classes: string[];
}

const Button = ({ text, classes }: Props) => {
  let buttonClasses = [styles.button, ...classes].join(' ')
  return (<button className={buttonClasses}>{text}</button>)
}

export default Button
