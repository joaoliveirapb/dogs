import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { UserStorage } from './UserContext'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { NotFound } from './components/Helper/NotFound'
import { ProtectedRoute } from './components/Helper/ProtectedRoute'
import { Photo } from './components/Photo/Photo'
import { UserProfile } from './components/User/UserProfile'
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
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}
