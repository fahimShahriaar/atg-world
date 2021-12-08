import React, { useContext } from 'react';
import { UserContext } from '../../App';
import downArrow from '../../images/down-arrow.png'
import joinGroup from '../../images/joinGroup.png'
import leave from '../../images/leave.png'
import './AllPostHeading.css'

const AllPostHeading = () => {
    const { loginState } = useContext(UserContext);
    const [loggedInUser] = loginState;
    return (
        <div>
            <header >
                {/* mobile screen */}
                <div className="d-md-none my-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">Posts(368)</div>
                        <div className="p-2 filterButton">
                            <small>Filter: All</small>
                            <img className="ms-3" src={downArrow} alt="" width="8px" />
                        </div>
                    </div>
                </div>
                {/* Large screen */}
                <div className="d-none d-md-block">
                    <div className="border-bottom my-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="">
                                <a href="/" className="fw-bold text-dark me-4 postHeadingLink">All Posts</a>
                                <a href="/" className="me-4 postHeadingLink">Article</a>
                                <a href="/" className="me-4 postHeadingLink">Event</a>
                                <a href="/" className="me-4 postHeadingLink">Education</a>
                                <a href="/" className="me-4 postHeadingLink">Job</a>
                            </div>
                            <div className="d-flex mb-2">
                                <div className="p-2 filterButton rounded">
                                    <small>Write a post</small>
                                    <img className="ms-3" src={downArrow} alt="" width="8px" />
                                </div>
                                {
                                    loggedInUser ? <div className="p-2 ms-3 btn border border-2">
                                        <img className="me-2" src={leave} alt="" width="" />
                                        <small>Leave Group</small>
                                    </div> :
                                        <div className="p-2 ms-3 btn btn-primary">
                                            <img className="me-2" src={joinGroup} alt="" width="" />
                                            <small>Join Group</small>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AllPostHeading;