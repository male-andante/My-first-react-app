//import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav'
import MyFooter from './Components/MyFooter'
import Welcome from './Components/Welcome'
import AllTheBooks from './Components/AllTheBooks'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  )
}

export default App
