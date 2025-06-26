import React from 'react'
import Anavbar from '../Admin-Common/Anavbar'
import Aheader from '../Admin-Common/Aheader'

function Addtestimonial() {
    return (
        <div>
            <Anavbar />
            <Aheader title="Add Testimonial" name="Add Testimonial" />
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3">
                <div className="sub-style">
                    <h5 className="sub-title text-primary pe-3">Let's Connect</h5>
                </div>
                <h1 className="display-5 mb-4">Send Your Message</h1>
                <p className="mb-3">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
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
                                <label htmlFor="project">Your Project</label>
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
                            <button className="btn btn-primary w-100 py-3">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addtestimonial
