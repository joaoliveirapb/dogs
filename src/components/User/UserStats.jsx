import { useEffect } from 'react'
import { STATS_GET } from '../../api'
import { useFetch } from '../../hooks/useFetch'
import { Error } from '../Helper/Error'
import { Head } from '../Helper/Head'
import { Loading } from '../Helper/Loading'
import { UserStatsGraphs } from './UserStatsGraphs'
// const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'))

export function UserStats() {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) {
    return (
      // <Suspense fallback={<Loading />}>
      //   <Head title="Estatísticas" />
      //   <UserStatsGraphs data={data} />
      // </Suspense>
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    )
  } else return null
}
