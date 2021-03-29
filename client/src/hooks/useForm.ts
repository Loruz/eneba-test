import { useState, useEffect, FormEvent } from 'react'

interface Values {
  [key: string]: string
}

interface ValidationErrors {
  [key: string]: string
}

const useForm = (callback: any, validate: any, initialValues: Values) => {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (name: string, value: string) => {
    setValues(values => ({ ...values, [name]: value }))
  }

  return {
    handleChange,
    handleSubmit,
    isSubmitting,
    setErrors,
    values,
    errors,
  }
}

export default useForm
