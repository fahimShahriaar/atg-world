import React, { useContext } from 'react';
import logo from '../../images/logo.png'
import search from '../../images/search.png'
import downArrow from '../../images/down-arrow.png'
import navRect from '../../images/navRect.png'
import navCircle from '../../images/navCircle.png'
import navDown from '../../images/navDown.png'
import gray from '../../images/josephGray.png'

import './Navbar.css'
import Register from '../Register/Register';
import { UserContext } from '../../App';

const Navbar = () => {
    const { loginState } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loginState;

    const handleLogOut = () => {
        setLoggedInUser(false)
    }

    const searchBg = {
        backgroundColor: "#F2F2F2"
    }
    return (
        <header>
            <nav className="d-none d-md-block fixed-top bg-light">
                <div className="d-flex justify-content-between border-b align-items-center px-5 py-2 border">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="border w-25 d-flex align-items-center rounded-pill px-4 py-2" style={searchBg}>
                        <img src={search} alt="" />
                        <input type="search" className="ms-2 w-100 px-2 border-0 outline-0 search-input" placeholder="Search for your favorite groups in ATG" />
                    </div>
                    <div>
                        <button type="button" className="border-0 bg-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {
                                loggedInUser ? <div>
                                    <img src={gray} alt="" />
                                    <small className="mx-3">Siddrat Goyal</small>
                                    <button onClick={handleLogOut} className="btn btn-sm btn-outline-dark">Logout</button>
                                    {/* <img className="ms-2" src={downArrow} alt="" /> */}
                                </div> :
                                    <div>
                                        <small className="text-dark">
                                            Create Account. <span style={{ color: "#4C6FF5" }}> It's Free</span>
                                        </small>
                                        <img className="ms-2" src={downArrow} alt="" />
                                    </div>
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* <!-- Modal --> */}
            <Register />


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