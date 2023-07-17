import { Feed } from '../components/Feed/Feed'
import { Head } from '../components/Helper/Head'

export function Home() {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  )
}
