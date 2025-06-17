import React from 'react'

function Navbar() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.Eow3_Gl9FZNS8zhNN9tcKwHaFS&pid=Api&P=0&h=180" height={50} alt="MDB Logo" loading="lazy" />
                        </a>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Help Center</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <a className="text-reset me-3" href="#">
                            <i className="fas fa-shopping-cart" />
                        </a>
                        <div className="dropdown">
                            <a data-mdb-dropdown-init className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                                <i className="fas fa-bell" />
                                <span className="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}

        </div>
    )
}

export default Navbar
