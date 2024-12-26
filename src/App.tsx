import './App.css'
import { Button, ColorRed } from './components'

function App() {
  const handleClick = () => {
    alert('Button clicked')
  }

  const sayHello = () => {
    alert('Hello!!!')
  }
  
  return (
    <>
      <ColorRed>
        <Button parentMethod={sayHello}>
          Click me
        </Button>
      </ColorRed>
      <Button parentMethod={handleClick}>
        Click me
      </Button>
    </>
  )
}

export default App
