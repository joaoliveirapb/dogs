import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './UserHeader.module.css'
import { UserHeaderNav } from './UserHeaderNav'

export function UserHeader() {
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Poste sua Foto')
        break
      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}
