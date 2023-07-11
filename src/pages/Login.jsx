import { Route, Routes } from 'react-router-dom'
import { LoginCreate } from '../components/Login/LoginCreate'
import { LoginForm } from '../components/Login/LoginForm'
import { LoginPasswordLost } from '../components/Login/LoginPasswordLost'
import { LoginPasswordReset } from '../components/Login/LoginPasswordReset'

export function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}
