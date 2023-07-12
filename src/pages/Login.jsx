import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { LoginCreate } from '../components/Login/LoginCreate'
import { LoginForm } from '../components/Login/LoginForm'
import { LoginPasswordLost } from '../components/Login/LoginPasswordLost'
import { LoginPasswordReset } from '../components/Login/LoginPasswordReset'
import styles from './Login.module.css'

export function Login() {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}
