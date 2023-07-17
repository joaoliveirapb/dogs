import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}
