import React from 'react';
import AllPosts from '../AllPosts/AllPosts';
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navbar />
            <TopBanner />
            <AllPosts />
        </div>
    );
};

export default Home;