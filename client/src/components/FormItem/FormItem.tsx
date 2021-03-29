import React, { ChangeEvent } from 'react'
import styles from './FormItem.module.css'

interface Props {
  tag?: 'input' | 'textarea';
  label: string;
  value: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange: (name: string, value: string) => void;
  errorMessage?: string;
}

const FormItem = ({ tag, label, value, name, type, placeholder, onChange, errorMessage }: Props) => {

  function handleInput (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    onChange(e.target.name, e.target.value)
  }

  function handleTextArea (e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault()
    onChange(e.target.name, e.target.value)
  }

  let innerClasses = [errorMessage && styles.hasError, styles.formInput].join(' ')
  let textAreaClasses = [innerClasses, styles.formTextArea].join(' ')
  let component = (tag === 'textarea' ?
    <textarea
      className={textAreaClasses}
      name={name}
      onChange={handleTextArea}
      defaultValue={value}
      placeholder={placeholder}/> :
    <input
      className={innerClasses}
      name={name}
      type={type}
      onChange={handleInput}
      value={value}
      placeholder={placeholder}/>)

  return (
    <label className={styles.formItem}>
      <div className={styles.label}>{label}</div>
      {component}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </label>
  )
}

export default FormItem
