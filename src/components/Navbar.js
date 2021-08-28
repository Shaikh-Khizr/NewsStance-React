import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {

    render() {
        return (
            <header className="p-3 bg-dark text-white">

                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" style={{ filter: 'invert(1)' }}>
                        <img src="https://image.flaticon.com/icons/png/512/71/71036.png" alt="News Icon" className="bi me-2" width="40" height="32" title='News Stance' />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link px-2 text-white dropdown-toggle" to="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/business">Business</Link></li>
                            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                            <li><Link className="dropdown-item" to="/general">General</Link></li>
                            <li><Link className="dropdown-item" to="/health">Health</Link></li>
                            <li><Link className="dropdown-item" to="/science">Science</Link></li>
                            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
                        <li><Link to="/" className="nav-link px-2 text-white">Features</Link></li>
                        <li><Link to="/" className="nav-link px-2 text-white">Pricing</Link></li>
                        <li><Link to="/" className="nav-link px-2 text-white">FAQs</Link></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar
