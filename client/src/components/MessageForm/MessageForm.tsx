import React, { FC } from 'react'
import styles from './MessageForm.module.css'
import FormItem from '../FormItem/FormItem'
import Button from '../Button/Button'
import useForm from '../../hooks/useForm'

interface Values {
  [key: string]: string
}

const MessageForm: FC = () => {
  let initialValues: Values = {
    first_name: '',
    last_name: '',
    message: ''
  }
  let { values, errors, handleChange, handleSubmit } = useForm(sendMessage, validate, initialValues)

  function validate (values: Values) {
    let errors: any = {}
    if (!values.first_name) {
      errors.first_name = 'This field is required'
    }
    if (!values.last_name) {
      errors.last_name = 'This field is required'
    }
    if (!values.message) {
      errors.message = 'This field is required'
    }
    return errors
  }

  function sendMessage () {
    console.log('sended')
  }

  return (
    <div className={styles.form}>
      <form action="#" onSubmit={handleSubmit}>
        <FormItem label='First name'
                  onChange={handleChange}
                  value={values.first_name}
                  errorMessage={errors.first_name}
                  name={'first_name'}
                  placeholder={'Your first name here'}/>
        <FormItem label='Last name'
                  onChange={handleChange}
                  value={values.last_name}
                  errorMessage={errors.last_name}
                  name={'last_name'}
                  placeholder={'Your last name here'}/>
        <FormItem label='Your message'
                  value={values.message}
                  errorMessage={errors.message}
                  onChange={handleChange}
                  name={'message'}
                  placeholder={'Type your message here'}
                  tag={'textarea'}/>
        <Button classes={[styles.submit]} text={'Submit'}/>
      </form>
    </div>
  )
}
export default MessageForm
