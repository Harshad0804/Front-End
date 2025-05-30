import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
      <h1>This is component B</h1>
      <h2>My Name is : {name}</h2>
      <C name={name} setname={setname} />
    </div>
  )
}

export default B
