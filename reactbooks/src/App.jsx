import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav'
import MyFooter from './Components/MyFooter'
import Welcome from './Components/Welcome'
import AllTheBooks from './Components/AllTheBooks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-grow-1">
          <Welcome />
          <Routes>
            <Route path="/" element={<AllTheBooks searchQuery={searchQuery}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
