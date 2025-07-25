import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Read from './Component/Read'
import Create from './Component/Create'
import Update from './Component/Update'

function App() {
  return (
    <div>
      {/* <h1>This is redux-crud file.</h1> */}

      {/* TASK-3 */}



      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/new' element={<Create />}/>
        <Route path='/edit/:id' element={<Update />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
