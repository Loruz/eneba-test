import React, { FC } from 'react'
import styles from './Testimonial.module.css'

const TestimonialList: FC = () => {
  let testimonials = [1, 2, 3].map(t => {
    return (
      <div className={styles.testimonial} key={t}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus.
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
