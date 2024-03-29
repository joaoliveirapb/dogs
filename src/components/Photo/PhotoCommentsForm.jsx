import { useState } from 'react'
import { COMMENT_POST } from '../../api'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import { useFetch } from '../../hooks/useFetch'
import { Error } from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

export function PhotoCommentsForm({ id, setComments, single }) {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={styles.textarea}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}
