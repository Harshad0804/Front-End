import React from 'react'
import Task1 from './ListsAndKeys/Task1'
import Task2 from './ListsAndKeys/Task2'
import Hook1 from './Hooks/Hook1'
import Hook2 from './Hooks/Hook2'
import Button from './Task5/Button'
import Form from './Task5/Form'

function App() {
  return (
    <div>
      {/* <h1>this is tyask 2 site</h1> */}


      {/* Lists And Keys */}
      <Task1 />
      <Task2 />

      {/* Hooks */}
      <Hook1 />
      <Hook2 />

      {/* Task-5 */}
      <Button />
      <Form />
    </div>
  )
}

export default App
