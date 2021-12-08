import React, { useContext } from 'react';
import './AllPostBodySidebar.css';
import locationIcon from '../../images/location.png'
import editIcon from '../../images/editIcon.png'
import helpIcon from '../../images/helpIcon.png'
import { UserContext } from '../../App';


const AllPostBodySidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className="px-4">
            <div className="w-75 mx-auto">
                <div className="border-2 border-bottom p-2 d-flex align-items-center">
                    <img src={locationIcon} alt="" height="18px" />
                    <input type="text" className="flex-grow-1 border-0 ps-2 locationInput" placeholder="Nodia, India" />
                    <img src={editIcon} className="text-end" alt="" height="15px" />
                </div>
                <div className="my-4">
                    <img src={helpIcon} alt="" className="me-2" />
                    <small>Your location will help us serve better and extend a personalised experience.</small>
                </div>
            </div>
        </div>
    );
};

export default AllPostBodySidebar;