import React from 'react';
import dotIcon from '../../images/dotIcon.png';
import viewIcon from '../../images/viewIcon.png';
import shareIcon from '../../images/shareIcon.png';



const EventPost = ({ eventPost }) => {
    const { banner, type, title, info, infoIcon, location, locationIcon, buttonText, userDP, userName, views } = eventPost;
    const textColor = type.toLowerCase() === "meetup" ? "#E56135" : "#02B875";
    return (
        <div className="border my-4">
            <img src={banner} className="w-100" alt="" />
            <div className="p-4">
                <h6 className="fw-bold">{type}</h6>
                <div className="d-flex justify-content-between my-2">
                    <h5 className="fw-bold w-75">{title}</h5>
                    <img src={dotIcon} alt="" height="8px" />
                </div>
                <div className="d-flex mb-3">
                    <div>
                        <img src={infoIcon} alt="" />
                        <small className="ms-2">{info}</small>
                    </div>
                    <div className="ms-5">
                        <img src={locationIcon} alt="" />
                        <small className="ms-2">{location}</small>
                    </div>
                </div>
                <div style={{ color: `${textColor}` }} className="text-center border rounded py-1 fw-bold mb-4">
                    <span>{buttonText}</span>
                </div>
                <div className="d-flex align-items-center">
                    <img src={userDP} alt="" />
                    <div className="flex-grow-1 mx-4">
                        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
                            <h6 className="fw-bold my-2">{userName}</h6>
                            <small><img src={viewIcon} alt="" /> {views}</small>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#EDEEF0" }} className="px-2 py-1 rounded">
                        <img src={shareIcon} alt="" />
                        <span className="ms-2 d-md-none">Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPost;