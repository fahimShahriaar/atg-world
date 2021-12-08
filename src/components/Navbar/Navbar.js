import React from 'react';
import logo from '../../images/logo.png'
import search from '../../images/search.png'
import downArrow from '../../images/down-arrow.png'
import navRect from '../../images/navRect.png'
import navCircle from '../../images/navCircle.png'
import navDown from '../../images/navDown.png'

import './Navbar.css'

const Navbar = () => {
    const searchBg = {
        backgroundColor: "#F2F2F2"
    }
    return (
        <header>
            <nav className="d-none d-md-block">
                <div className="d-flex justify-content-between border-b align-items-center px-5 py-2 border">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="border w-25 d-flex align-items-center rounded-pill px-4 py-2" style={searchBg}>
                        <img src={search} alt="" />
                        <input type="search" className="ms-2 w-100 px-2 border-0 outline-0 search-input" placeholder="Search for your favorite groups in ATG" />
                    </div>
                    <div>
                        <button type="button" class="border-0 bg-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <small className="text-dark">
                                Create Account. <span style={{ color: "#4C6FF5" }}> It's Free</span>
                            </small>
                            <img className="ms-2" src={downArrow} alt="" />
                        </button>
                        {/* <a href="/" className="text-decoration-none">
                            <small className="text-dark">
                                Create Account. <span style={{ color: "#4C6FF5" }}> It's Free</span>
                            </small>
                            <img className="ms-2" src={downArrow} alt="" />
                        </a> */}
                    </div>
                </div>
            </nav>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Mobile Navbar */}
            <nav className="text-end d-md-none py-2 me-5">
                <img src={navRect} className="mx-2" alt="" />
                <img src={navCircle} className="mx-2" alt="" />
                <img src={navDown} className="mx-2" alt="" />
            </nav>

        </header>
    );
};

export default Navbar;