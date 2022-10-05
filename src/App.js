import { useState } from "react"
import Entrance from "./components/Entrance"
import Main from './components/Main'

function App() {
  const [content, setContent] = useState('entrance')

  const setMain = () => {
    setContent('main')
  }

  return (
    <div>
      {
        content === 'entrance' 
        ? <Entrance change={setMain}/>
        : <Main change={setContent}/>
      }
    </div>
  )
}

export default App