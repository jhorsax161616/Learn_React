import './App.css'
import { useFetch } from './hooks'

const url = 'https://jsonplaceholder.typicode.com/posts'

interface Data {
  userId: number
  id: number
  title: string
  body: string
}

function App() {
  const {data, error, loading} = useFetch<Data[]>(url)

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Ups! Ocurrió un error: {error.message}</h1>

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {data?.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
