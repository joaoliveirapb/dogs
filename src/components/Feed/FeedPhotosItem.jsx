import { Eye } from 'lucide-react'
import { Image } from '../Helper/Image'
import styles from './FeedPhotosItem.module.css'

export function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>
        <Eye size={20} />
        {photo.acessos}
      </span>
    </li>
  )
}
