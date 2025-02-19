import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>
        my name is <span>Nayan</span>
       </h1>
       <h2>
        my age is <span>18</span>
       </h2>
        <h3>
          Im a <span>student</span>
        </h3>
      </div>
      </> 
  )
}

export default App
