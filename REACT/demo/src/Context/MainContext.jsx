import React from 'react'
import ChildA from './UseContext/ChildA'
// import A from './Drilling/A'

function MainContext() {
  return (
    <div>
      <h1>Hy context hook...!</h1>
      {/* <A /> */}
      <ChildA />
    </div>
  )
}

export default MainContext
