import { useEffect } from 'react'
import { PHOTOS_GET } from '../../api'
import { useFetch } from '../../hooks/useFetch'
import { Error } from '../Helper/Error'
import { Loading } from '../Helper/Loading'
import styles from './FeedPhotos.module.css'
import { FeedPhotosItem } from './FeedPhotosItem'

export function FeedPhotos({ user, page, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchPhoto() {
      const total = 6
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhoto()
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  } else {
    return null
  }
}
