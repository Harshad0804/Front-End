import React from 'react'
// import Click from './HandlingEvent/Click'
// import Input from './HandlingEvent/Input'
// import Login from './ConditionRendering/Login'
// import Voting from './ConditionRendering/Voting'
// import Form from './Form/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routing&Style/Pages/Home'
import Contact from './Routing&Style/Pages/Contact'
import About from './Routing&Style/Pages/About'
import Help from './Routing&Style/Pages/Help'
import Error from './Routing&Style/Pages/Error'

function App() {
  return (
    <div>
      {/* <h1>this is the task 3 component</h1> */}

      {/* Handling Event*/}
      {/* <Click />
      <Input /> */}

      {/* Conditional Rendering */}
      {/* <Login />
      <Voting /> */}


      {/* Form */}
      {/* <Form /> */}

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
