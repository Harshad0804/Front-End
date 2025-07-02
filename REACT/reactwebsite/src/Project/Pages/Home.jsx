import React from 'react'
import Navbar from '../Common/Navbar'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

function Home() {
    return (
        <div>
            <Navbar />
            <MDBCarousel showControls showIndicators>
                <MDBCarouselItem itemId={1}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />

                    <MDBCarouselCaption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>



            <div>
                {/* About Section */}
                <section id="about" className="about section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>About</h2>
                        <p>About Us<br /></p>
                    </div>{/* End Section Title */}
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay={100}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check2-circle" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                    <li><i className="bi bi-check2-circle" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                    <li><i className="bi bi-check2-circle" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                <a href="about.html" className="read-more"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </section>{/* /About Section */}
                {/* Clients Section */}
                <section id="clients" className="clients section light-background">
                    <div className="container" data-aos="fade-up">
                        <div className="row gy-4">
                            <div className="col-xl-2 col-md-3 col-6 client-logo">
                                <img src="assets/img/clients/client-1.png" className="img-fluid" alt />
                            </div>{/* End Client Item */}</div>
                    </div></section></div>





        </div>

    )
}

export default Home
