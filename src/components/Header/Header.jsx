import { User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
          <User size={20} />
        </Link>
      </nav>
    </header>
  )
}
