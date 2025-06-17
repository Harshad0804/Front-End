import React from 'react'
import Click from './HandlingEvent/Click'
import Input from './HandlingEvent/Input'
import Login from './ConditionRendering/Login'
import Voting from './ConditionRendering/Voting'
import Form from './Form/Form'

function App() {
  return (
    <div>
      <h1>this is the task 3 component</h1>

      {/* Handling Event*/}
      <Click />
      <Input />

      {/* Conditional Rendering */}
      <Login />
      <Voting />


      {/* Form */}
      <Form />
    </div>
  )
}

export default App
