import { Route, Routes } from 'react-router-dom'
import { Feed } from '../components/Feed/Feed'
import { UserHeader } from '../components/User/UserHeader'
import { UserPhotoPost } from '../components/User/UserPhotoPost'
import { UserStats } from '../components/User/UserStats'

export function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  )
}
