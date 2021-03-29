import React, { FC } from 'react'
import styles from './Testimonial.module.css'
import { useQuery } from '@apollo/client'
import { LOAD_TESIMONIALS } from '../../graphql/queries'

interface Testimonial {
  text: string;
}
const TestimonialList: FC = () => {
  const { data, loading } = useQuery(LOAD_TESIMONIALS)
  if (loading) return null

  let testimonials = data.testimonials.map((testimonial: Testimonial, index: number) => {
    return (
      <div className={styles.testimonial} key={index}>
        {testimonial.text}
      </div>
    )
  })
  return (
    <div className={styles.testimonials}>
      {testimonials}
    </div>
  )
}
export default TestimonialList
