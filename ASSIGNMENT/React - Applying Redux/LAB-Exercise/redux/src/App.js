import React from 'react'
import Count from './data/counter/Count'
import Addtodo from './data/Todolist/Addtodo'
import Todolist from './data/Todolist/Todolist'

function App() {
  return (
    <div>
      {/* <h1>This is redux file</h1> */}


      <div className="App"> 
      {/* Task-1 */}
      {/* <Count /> */}

      {/* Task-2 */}
      
      <Addtodo />
      <Todolist />
      </div>
    </div>
  )
}

export default App
