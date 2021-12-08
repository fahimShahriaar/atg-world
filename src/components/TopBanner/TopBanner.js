import React, { useContext } from 'react';
import './TopBanner.css'
import arrowBack from '../../images/arrow-back.png'
import fixed from '../../images/fixed.png'
import { UserContext } from '../../App';

const TopBanner = () => {
    const { loginState } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loginState;

    const bgStyle = {
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)",
        color: "white"
    }
    const handleLogin = () => {
        if (loggedInUser) {
            setLoggedInUser(false);
        }
        else {
            setLoggedInUser(true)
        }
    }
    return (
        <div className="top-banner">
            <div style={bgStyle} className="h-100">
                <div className="h-100 container pb-5">
                    <div className="d-md-none d-flex justify-content-between align-items-center py-2">
                        <img src={arrowBack} alt="" height="16px" />
                        {
                            loggedInUser ?
                                <button onClick={handleLogin} type="button" className="btn border text-white" data-bs-dismiss="modal">Leave Group</button> :
                                <button type="button" className="btn border text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Join Group</button>
                        }
                    </div>
                    <div className="h-100 d-flex flex-column justify-content-end pb-5">
                        <h3 className="fw-bold">Computer Engineering</h3>
                        <small>142,765 Computer Engineers follow this</small>
                    </div>
                </div>
            </div>
            <div class="position-fixed d-md-none" style={{ bottom: "15px", right: "10px" }}>
                <img src={fixed} alt="" />
            </div>
        </div>

    );
};

export default TopBanner;