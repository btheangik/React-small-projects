import { useState } from 'react'
import Addpostbutton from './component/button/Addpostbutton'
import Postform from './component/postform/postform'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Postform/>

   </div>
  )
}

export default App
