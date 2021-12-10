import React, { useContext } from 'react';
import './AllPostBodySidebar.css';
import locationIcon from '../../images/location.png'
import editIcon from '../../images/editIcon.png'
import helpIcon from '../../images/helpIcon.png'
import g1 from '../../images/g1.png'
import g2 from '../../images/g2.png'
import g3 from '../../images/g3.png'
import g4 from '../../images/g4.png'
import like from '../../images/like.png'
import { UserContext } from '../../App';


const AllPostBodySidebar = () => {
    const { loginState } = useContext(UserContext);
    const [loggedInUser] = loginState;

    return (
        <div className="px-4">
            <div className="w-75 mx-auto">
                <div className="border-2 border-bottom p-2 d-flex align-items-center">
                    <img src={locationIcon} alt="" height="18px" />
                    <input type="text" className="flex-grow-1 border-0 ps-2 locationInput" placeholder="Dhaka, Bangladesh" />
                    <img src={editIcon} className="text-end" alt="" height="15px" />
                </div>
                <div className="my-4">
                    <img src={helpIcon} alt="" className="me-2" />
                    <small>Your location will help us serve better and extend a personalised experience.</small>
                </div>
                {
                    loggedInUser && <div>
                        <div className="d-flex align-items-center">
                            <img src={like} alt="" className="me-2" />
                            <span>RECOMMENDED GROUPS</span>
                        </div>
                        <div className="mt-3 mb-5">
                            <div className="d-flex justify-content-between align-items-center my-2 p-2">
                                <div className="d-flex align-items-center">
                                    <img src={g1} alt="" />
                                    <p className="my-0 ms-3">Leisure</p>
                                </div>
                                <small className="px-2 py-1 rounded-pill" style={{ backgroundColor: "lightGray" }}>Follow</small>
                            </div>
                            <div className="d-flex justify-content-between align-items-center my-2 p-2">
                                <div className="d-flex align-items-center">
                                    <img src={g2} alt="" />
                                    <p className="my-0 ms-3">Activism</p>
                                </div>
                                <small className="px-2 py-1 rounded-pill" style={{ backgroundColor: "lightGray" }}>Follow</small>
                            </div>
                            <div className="d-flex justify-content-between align-items-center my-2 p-2">
                                <div className="d-flex align-items-center">
                                    <img src={g3} alt="" />
                                    <p className="my-0 ms-3">MBA</p>
                                </div>
                                <small className="px-2 py-1 rounded-pill" style={{ backgroundColor: "lightGray" }}>Follow</small>
                            </div>
                            <div className="d-flex justify-content-between align-items-center my-2 p-2">
                                <div className="d-flex align-items-center">
                                    <img src={g4} alt="" />
                                    <p className="my-0 ms-3">Phylosophy</p>
                                </div>
                                <small className="px-2 py-1 rounded-pill" style={{ backgroundColor: "lightGray" }}>Follow</small>
                            </div>
                        </div>
                        <p className="text-end"><a href="/" className="text-decoration-none">See More...</a></p>
                    </div>
                }
            </div>
        </div>
    );
};

export default AllPostBodySidebar;