import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { Feed } from '../components/Feed/Feed'
import { NotFound } from '../components/Helper/NotFound'
import { UserHeader } from '../components/User/UserHeader'
import { UserPhotoPost } from '../components/User/UserPhotoPost'
import { UserStats } from '../components/User/UserStats'

export function User() {
  const { data } = useContext(UserContext)

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}
