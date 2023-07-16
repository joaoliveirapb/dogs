import { useState } from 'react'
import styles from './Image.module.css'

export function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true)

  function handleLoad({ target }) {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton} />}
      <img onLoad={handleLoad} alt={alt} {...props} className={styles.img} />
    </div>
  )
}
