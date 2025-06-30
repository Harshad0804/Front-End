import React from 'react'
import Anavbar from '../Admin-Common/Anavbar'
import Aheader from '../Admin-Common/Aheader'

function Countrymanage() {
  return (
    <div>
      <Anavbar />
      <Aheader title="Manage Country" name="Country" />
      <h1 className='text-center my-4'><i><b>MANAGE DATA OF COUNTRY</b></i></h1>
      <div className="container">
        <table class="table my-4 table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button className='btn btn-info'>View</button>
                <button className='btn btn-success mx-3'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Countrymanage
