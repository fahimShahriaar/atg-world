import React from 'react';
import './TopBanner.css'
import arrowBack from '../../images/arrow-back.png'

const TopBanner = () => {
    const bgStyle = {
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)",
        color: "white"
    }
    return (
        // <div className="top-banner">
        //     <div style={bgStyle} className="h-100 d-flex flex-column justify-content-end">
        //         <div className="container mb-5">
        //             <h3 className="fw-bold">Computer Engineering</h3>
        //             <small>142,765 Computer Engineers follow this</small>
        //         </div>
        //     </div>
        // </div>
        <div className="top-banner">
            <div style={bgStyle} className="h-100">
                <div className="h-100 container pb-5">
                    <div className="d-md-none d-flex justify-content-between align-items-center py-2">
                        <img src={arrowBack} alt="" height="16px" />
                        <button className="btn border text-white">Join</button>
                    </div>
                    <div className="h-100 d-flex flex-column justify-content-end pb-5">
                        <h3 className="fw-bold">Computer Engineering</h3>
                        <small>142,765 Computer Engineers follow this</small>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopBanner;