import React from 'react'
import Adminnavbar from '../Admincommon/Adminnavbar'
import Adminheader from '../Admincommon/Adminheader'

function Addteam() {
    return (
        <div>
            <Adminnavbar />
            <Adminheader title="ADD CAR DATA" name="Car data" />



            <div className="col-xl-8 m-auto wow fadeInUp p-5" data-wow-delay="0.1s">
                <div className="bg-secondary p-5 rounded">
                    <h4 className="text-primary mb-4">Send Your Message</h4>
                    <form>
                        <div className="row g-4">
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                                    <label htmlFor="phone">Your Phone</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="project" placeholder="Project" />
                                    <label htmlFor="project">Date</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-light w-100 py-3">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addteam
