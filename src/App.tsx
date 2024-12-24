import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Jhorsax')

  const countMore = () => {
    setCount((count) => count + 1)
  }

  const changeName = () => {
    setName('Jhordan Sax')
  }

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <p>{name}</p>
      <Button label="Change Name" parentMethod={changeName} />
    </>
  )
}

export default App
