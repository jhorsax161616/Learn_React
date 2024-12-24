import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const fetchData = useCallback(
    async () => {
      setLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error('Se produjo un error al solicitar los datos')
        }

        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        setError(err as string)
      } finally {
        setLoading(false)
      }
    },
    [loading],
  )

  // Comunicarnos con un endpoint
  /* ¿Cuándo usamos un useEffect?
  El uso correcto de useEffect es en los siguientes casos:
  - Para sincronizar con entidades externas (APIs, bases de datos, etc.)
  - Operaciones asíncronas
  - Para parametros de entrada de un componente
  */
  useEffect(() => {
    // Aquí se hace la petición, y siempre se ejecuta cuando el componente se monta o se actualiza el estado de data
    fetchData()
  }, [fetchData])

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Ups! Ocurrió un error: {error}</h1>

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
