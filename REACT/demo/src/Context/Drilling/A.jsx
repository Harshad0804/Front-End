import React, { useState } from 'react'
import B from './B'

function A() {
    const [name,setname] = useState("Harshad")
  return (
    <div>
      <h1>This is Component A</h1>
      <h2>My Name is : {name}</h2>
      <B name={name} setname={setname}/>
    </div>
  )
}

export default A
