import React from 'react'
import D from './D'

function C({name,setname}) {
  return (
    <div>
       <h1>This is component C</h1>
       <h2>My Name is : {name}</h2>
       <D name={name} setname={setname} />
    </div>
  )
}

export default C
