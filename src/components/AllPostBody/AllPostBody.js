import React from 'react';
import sarthakKamra from '../../images/sarthakKamra.png';
import sarahWest from '../../images/sarahWest.png';
import ronalJones from '../../images/ronalJones.png';
import josephGray from '../../images/josephGray.png';
import articleBanner from '../../images/articleBanner.png';
import educationBanner from '../../images/educationBanner.png';
import meetupBanner from '../../images/meetupBanner.png';
import location from '../../images/location.png';
import calendarIcon from '../../images/calendarIcon.png';

import folderIcon from '../../images/folderIcon.png';
import BlogPost from '../BlogPost/BlogPost';
import EventPost from '../EventPost/EventPost';
import AllPostBodySidebar from '../AllPostBodySidebar/AllPostBodySidebar';

const AllPostBody = () => {
    const blogPostData = [
        {
            key: "hjsfj12",
            banner: `${articleBanner}`,
            type: "Article",
            title: "What if famous brands had regular fonts? Meet RegulaBrands!",
            description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
            userDP: `${sarthakKamra}`,
            userName: "Rabin Hoodson",
            postView: "1.14K"
        },
        {
            key: "ghfda12",
            banner: `${educationBanner}`,
            type: "Education",
            title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
            description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
            userDP: `${sarahWest}`,
            userName: "Jacky Chan",
            postView: "4.8K"
        },
    ]
    const eventPostData = [
        {
            key: "wehjr42",
            banner: `${meetupBanner}`,
            type: "Meetup",
            title: "Finance & Investment Elite Social Mixer @Lujiazui",
            info: "Fri, 12 Oct, 2018",
            infoIcon: `${calendarIcon}`,
            location: `Ahmedabad, India`,
            locationIcon: `${location}`,
            buttonText: "Visit Website",
            userDP: `${ronalJones}`,
            userName: "Fahim Shahriar",
            views: "800 views"
        },
        {
            key: "yweruj71",
            type: "Job",
            title: "Software Developer - II",
            info: 'Innovaccer Analytic...',
            infoIcon: `${folderIcon}`,
            location: `Dhaka, Bangladesh`,
            locationIcon: `${location}`,
            buttonText: "Apply on Timesjobs",
            userDP: `${josephGray}`,
            userName: "Joseph Gray",
            views: "1.4k views"
        }
    ]
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-7">
                    <div>
                        {
                            blogPostData.map(blogPost => <BlogPost key={blogPost.key} blogPost={blogPost} />)
                        }
                        {
                            eventPostData.map(eventPost => <EventPost key={eventPost.key} eventPost={eventPost} />)
                        }
                    </div>
                </div>
                <div className="d-none d-md-block col-12 col-md-5 my-4">
                    <AllPostBodySidebar />
                </div>
            </div>
        </div>
    );
};

export default AllPostBody;