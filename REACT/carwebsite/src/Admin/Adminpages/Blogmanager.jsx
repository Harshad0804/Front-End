import React, { useEffect, useState } from 'react'
import Adminnavbar from '../Admincommon/Adminnavbar'
import Adminheader from '../Admincommon/Adminheader'
import axios from 'axios'

function Blogmanager() {

  const [blogmanage, setblogmanage] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Blog")
    console.log(res.data)
    setblogmanage(res.data)
  }

  // View Data In a Single Modal
  const [blogdata, setblogdata] = useState({
    id: "",
    title: "",
    desc: "",
    comment: "",
    name: "",
    date: "",
    img: ""
  })

  const viewdata = async (id)=> {
    const res = await axios.get(`http://localhost:3000/Blog/${id}`)
    console.log(res.data)
    setblogdata(res.data)
  }



  // Delete Data By Button As Delete
  const removepro = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Blog/${id}`)
    console.log(res.data)
    fetchdata()
  }

  return (
    <div>
      <Adminnavbar />
      <Adminheader title="BLOGMANAGER" name="Blogmanager" />

      <h1 className='text-center m-3 '><i>BLOGMANAGER SITE</i></h1>
      <div className='container'>
        <table className="table table-hover table-dark p-5 text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">TITLE</th>
              <th scope="col">DATE</th>
              <th scope="col">COMMENT</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>

            {
              blogmanage && blogmanage.map((data) => {
                console.log(data)
                return (
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.title}</td>
                    <td>{data.date}</td>
                    <td>{data.comment}</td>
                    <td>
                      <button className='btn btn-success'  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viewdata(data.id)}>View</button>
                      <button className='btn btn-info mx-2'>Update</button>
                      <button className='btn btn-primary' onClick={() => removepro(data.id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      {/* View Data by Modal */}


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="blog-item">
              <div className="blog-img">
                <img src={blogdata.img} className="img-fluid rounded-top w-100" style={{ height: "450px" }} alt="Image" />
              </div>
              <div className="blog-content rounded-bottom p-4">
                <div className="blog-date">{blogdata.date}</div>
                <div className="blog-comment my-3">
                  <div className="small"><span className="fa fa-user text-primary" /><span className="ms-2">{blogdata.name}</span></div>
                  <div className="small"><span className="fa fa-comment-alt text-primary" /><span className="ms-2">{blogdata.comment}</span></div>
                </div>
                {/* <a href="#" className="h4 d-block mb-3">Rental Cars how to check driving fines?</a> */}
                <h5 className='mb-3'>{blogdata.title}</h5>
                <p className="mb-3" style={{}}>{blogdata.description}</p>
                {/* <a href="#" className>Read More  <i className="fa fa-arrow-right" /></a> */}
              </div>
            </div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Blogmanager
