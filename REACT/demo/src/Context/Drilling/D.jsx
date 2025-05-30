import React from 'react'

function D({name,setname}) {
  return (
    <div>
       <h1>This is component D</h1>
       <h2>My Name is : {name}</h2>

       <button onClick={()=>setname("Karguwal Harshad")}>Change Name</button>
    </div>
  )
}

export default D
