import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Website</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to="/" >Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link" to="about" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="about/about1">About-1</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="about2">About-2</NavLink></li>
                                    </ul>
                                </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/help">Help</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Header
