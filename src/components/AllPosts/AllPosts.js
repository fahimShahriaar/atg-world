import React from 'react';
import AllPostBody from '../AllPostBody/AllPostBody';
import AllPostHeading from '../AllPostHeading/AllPostHeading';

const AllPosts = () => {
    return (
        <div className="container">
            <AllPostHeading />
            <AllPostBody />
        </div>
    );
};

export default AllPosts;