import React, { useState } from 'react'
import Adminnavbar from '../Admincommon/Adminnavbar'
import Adminheader from '../Admincommon/Adminheader'
import { data, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Addblog() {

    const redirect = useNavigate()


    const [form, setform] = useState({
        id: "",
        title: "",
        desc: "",
        comment: "",
        name: "",
        date: "",
        img: ""
    })
    
    //Form Handling
    const getchange = (e) => {
        setform ({
            ...form,
            // to create new id
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)

    }

    //Submitting Form
    const handlingblog = async (e) =>{
        e.preventDefault()


        const res = await axios.post("http://localhost:3000/Blog", form)
        console.log(res.data)
        redirect("/Blogmanager")
        setform({
            id: "",
            title: "",
            desc: "",
            comment: "",
            name: "",
            date: "",
            img: ""
        })
    }

    return (
        <div>
            <Adminnavbar />
            <Adminheader title="ADD THE BLOG" name="Add Blog" />

            <div className="col-xl-8 m-auto wow fadeInUp p-5" data-wow-delay="0.1s">
                <div className="bg-secondary p-5 rounded">
                    <h4 className="text-primary mb-4">Send Your Blog</h4>
                    <form onSubmit={handlingblog}>
                        <div className="row g-4">
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" value={form.name} name='name' onChange={getchange} className="form-control" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" value={form.title} name='title' onChange={getchange}className="form-control" id="title" placeholder="Your Title" />
                                    <label htmlFor="title">Your Title</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="tel" value={form.comment} name='comment' onChange={getchange}className="form-control" id="comment" placeholder="Comment" />
                                    <label htmlFor="Comment">Comment</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="date" value={form.date} name='date' onChange={getchange} className="form-control" id="date" placeholder="Date" />
                                    <label htmlFor="date">Date</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" value={form.img} name='img' onChange={getchange} className="form-control" id="image" placeholder="image" />
                                    <label htmlFor="subject">Image URL</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" value={form.desc} name='desc' onChange={getchange} placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                    <label htmlFor="message">Description</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-light w-100 py-3">Send blog</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-light w-100 py-3">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addblog
