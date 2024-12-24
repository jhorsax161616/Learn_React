import { useEffect, useState } from "react"

interface Params<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(url, controller)
        
        if (!response.ok) {
          throw new Error('Se produjo un error al solicitar los datos')
        }

        const jsonData: T = await response.json()
        setData(jsonData)
        setError(null)
      } catch (err) {
        setError(err as Error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }

  }, [url])

  return { data, loading, error }
}

