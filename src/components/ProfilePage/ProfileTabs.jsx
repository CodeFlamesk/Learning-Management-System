import Subheading from "@components/ui/Subheading";
import ProfileImg from "./img/ProfileAuthor.png"
import ShareIcon from "./icon/ShareIcon";
import { NavLink } from 'react-router-dom';

import { useEffect, useState } from "react";


import ProfileTabsSlider from "./ProfileTabsSlider";

const ProfileTabs = () => {
    const [isSmallMenu, setIsSmallMenu] = useState(window.innerWidth < 991.98);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallMenu(window.innerWidth < 991.98);
        };
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (

        <div className=" w-full  tb:basis-[23%] pb-6 relative ">
            {isSmallMenu ? (
                <ProfileTabsSlider />
            ) : (
                <div className="flex  grow-0 flex-col max-h-full w-full overflow-hidden bg-sl-main  items-center rounded-2xl pt-6 ">
                    <img src={ProfileImg} />
                    <Subheading title="John Doe" styles="pt-3 " />
                    <button className="flex items-center justify-center px-6 py-3 mb-12 gap-1.5 border border-grey-border rounded-2xl mt-4 ">
                        <p className=" text-grey-900 text-sm font-medium">Share Profile</p>
                        <ShareIcon />
                    </button>
                    <NavLink
                        to="/myprofile/profile"
                        className={({ isActive }) => isActive ? "active-tabs-profilet" : "tabs-profilet"}  >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/myprofile/my-courses"
                        className={({ isActive }) => isActive ? "active-tabs-profile" : "tabs-profile"}  >
                        My Courses
                    </NavLink>
                    <NavLink
                        to="/myprofile/teachers"
                        className={({ isActive }) => isActive ? "active-tabs-profile" : "tabs-profile"}  >
                        Teachers
                    </NavLink>
                    <NavLink
                        to="/myprofile/message"
                        className={({ isActive }) => isActive ? "active-tabs-profile" : "tabs-profile"}  >
                        Message
                    </NavLink>
                    <NavLink
                        to="/myprofile/my-reviews"
                        className={({ isActive }) => isActive ? "active-tabs-profilebt" : "tabs-profilebt"}  >
                        My Reviews
                    </NavLink>
                </div>)
            }

        </div >



    );
};
export default ProfileTabs;