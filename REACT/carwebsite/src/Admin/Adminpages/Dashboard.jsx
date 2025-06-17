import React from 'react'
import Adminnavbar from '../Admincommon/Adminnavbar'
import Adminheader from '../Admincommon/Adminheader'

function Dashboard() {
  return (
    <div>
      <Adminnavbar />
      <Adminheader title="DASHBOARD" name="Dashboard"/>

      <h1 className='text-center'>THIS IS DASHBOARD SITE</h1>
    </div>
  )
}

export default Dashboard
