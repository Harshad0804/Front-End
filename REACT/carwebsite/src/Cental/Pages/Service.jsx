import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'
import Header from '../Common/Header'
import axios from 'axios'

function Service() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/services")
        console.log(res.data)
        setservice(res.data)
    }

    return (
        <div>
            <Navbar />
            <Header title="Our Services" name="Service" />
            <div>
                {/* Services Start */}
                <div className="container-fluid service py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 800 }}>
                            <h1 className="display-5 text-capitalize mb-3">Cental <span className="text-primary">Services</span></h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                            </p>
                        </div>
                        <div className="row g-4">
                            {
                                service && service.map((data) => {
                                    console.log(data)
                                    return (
                                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="service-item p-4">
                                                <div className="service-img">
                                                    {/* <i className="fa fa-phone-alt fa-2x" /> */}
                                                    < img src={data.img}/>
                                                </div>
                                                <h5 className="mb-3">{data.title}</h5>
                                                <p className="mb-0">{data.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Fact Counter */}
                <div className="container-fluid counter py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="counter-item text-center">
                                    <div className="counter-item-icon mx-auto">
                                        <i className="fas fa-thumbs-up fa-2x" />
                                    </div>
                                    <div className="counter-counting my-3">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">829</span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div>
                                    <h4 className="text-white mb-0">Happy Clients</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="counter-item text-center">
                                    <div className="counter-item-icon mx-auto">
                                        <i className="fas fa-car-alt fa-2x" />
                                    </div>
                                    <div className="counter-counting my-3">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">56</span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div>
                                    <h4 className="text-white mb-0">Number of Cars</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="counter-item text-center">
                                    <div className="counter-item-icon mx-auto">
                                        <i className="fas fa-building fa-2x" />
                                    </div>
                                    <div className="counter-counting my-3">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">127</span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div>
                                    <h4 className="text-white mb-0">Car Center</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="counter-item text-center">
                                    <div className="counter-item-icon mx-auto">
                                        <i className="fas fa-clock fa-2x" />
                                    </div>
                                    <div className="counter-counting my-3">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">589</span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div>
                                    <h4 className="text-white mb-0">Total kilometers</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fact Counter */}
                {/* Testimonial Start */}
                <div className="container-fluid testimonial py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 800 }}>
                            <h1 className="display-5 text-capitalize mb-3">Our Clients<span className="text-primary"> Riviews</span></h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                            </p>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                            <div className="testimonial-item">
                                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x" />
                                </div>
                                <div className="testimonial-inner p-4">
                                    <img src="img/testimonial-1.jpg" className="img-fluid" alt />
                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>
                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star text-body" />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top rounded-bottom p-4">
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x" />
                                </div>
                                <div className="testimonial-inner p-4">
                                    <img src="img/testimonial-2.jpg" className="img-fluid" alt />
                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>
                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star text-body" />
                                            <i className="fas fa-star text-body" />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top rounded-bottom p-4">
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x" />
                                </div>
                                <div className="testimonial-inner p-4">
                                    <img src="img/testimonial-3.jpg" className="img-fluid" alt />
                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>
                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star text-body" />
                                            <i className="fas fa-star text-body" />
                                            <i className="fas fa-star text-body" />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top rounded-bottom p-4">
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                {/* Banner Start */}
                <div className="container-fluid banner pb-5 wow zoomInDown" data-wow-delay="0.1s">
                    <div className="container pb-5">
                        <div className="banner-item rounded">
                            <img src="img/banner-1.jpg" className="img-fluid rounded w-100" alt />
                            <div className="banner-content">
                                <h2 className="text-primary">Rent Your Car</h2>
                                <h1 className="text-white">Interested in Renting?</h1>
                                <p className="text-white">Don't hesitate and send us a message.</p>
                                <div className="banner-btn">
                                    <a href="#" className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2">WhatchApp</a>
                                    <a href="#" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
            </div>
            <Footer />
        </div>
    )
}

export default Service
