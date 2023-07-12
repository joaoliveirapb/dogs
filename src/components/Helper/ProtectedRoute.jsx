import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

export function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext)
  if (login === true) {
    return children
  } else if (login === false) {
    return <Navigate to="/login" />
  } else {
    return <></>
  }
}
