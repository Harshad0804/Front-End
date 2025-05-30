import React, { useContext } from 'react'

import { value } from './ChildA'

function ChildD() {

    const {name,setname} = useContext(value)
  return (
    <div>
      <h1>This is child D</h1>

      <h2>the name is : {name}</h2>
      <button onClick={()=>setname("Harshad...!!!!!!")}>change hona chahiye</button>


    </div>
  )
}

export default ChildD
