import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { UserStorage } from './UserContext'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ProtectedRoute } from './components/Helper/ProtectedRoute'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { User } from './pages/User'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}
