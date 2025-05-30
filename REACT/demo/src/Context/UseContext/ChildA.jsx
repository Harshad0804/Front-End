import React, { createContext, useState } from 'react';
import ChildD from "./ChildD"

export const value = createContext()

function ChildA() {
  const [name, setname] = useState("Harshad")
  return (
    <div>


      <h1>This is child A</h1>
      {/* <h2>The name is : {name}</h2> */}


      <value.Provider value={{ name, setname }}>
        <ChildD />
      </value.Provider>
    </div>
  )
}

export default ChildA
