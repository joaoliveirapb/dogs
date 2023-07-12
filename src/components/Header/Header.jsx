import { User } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import styles from './Header.module.css'

export function Header() {
  const { data, userLogout } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
            <User size={20} />
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
            <User size={20} />
          </Link>
        )}
      </nav>
    </header>
  )
}
