import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../UserContext'
import styles from './PhotoComments.module.css'
import { PhotoCommentsForm } from './PhotoCommentsForm'

export function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments)
  const commentsSection = useRef(null)
  const { login } = useContext(UserContext)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  )
}
