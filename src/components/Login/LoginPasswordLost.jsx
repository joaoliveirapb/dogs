import { PASSWORD_LOST } from '../../api'
import { useFetch } from '../../hooks/useFetch'
import { useForm } from '../../hooks/useForm'
import { Button } from '../FormItems/Button'
import { Input } from '../FormItems/Input'
import { Error } from '../Helper/Error'
import { Head } from '../Helper/Head'

export function LoginPasswordLost() {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      })
      const { json } = await request(url, options)
      console.log(json)
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4C1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  )
}
