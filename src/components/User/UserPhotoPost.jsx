import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PHOTO_POST } from '../../api'
import { useFetch } from '../../hooks/useFetch'
import { useForm } from '../../hooks/useForm'
import { Button } from '../FormItems/Button'
import { Input } from '../FormItems/Input'
import { Error } from '../Helper/Error'
import { Head } from '../Helper/Head'
import styles from './UserPhotoPost.module.css'

export function UserPhotoPost() {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('idade', idade.value)
    formData.append('peso', peso.value)

    const token = localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  function handleImgChange(e) {
    setImg({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
          className={styles.file}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          />
        )}
      </div>
    </section>
  )
}
