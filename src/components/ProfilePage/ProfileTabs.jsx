import Subheading from "@components/ui/Subheading";
import ProfileImg from "./img/ProfileAuthor.png"
import ShareIcon from "./icon/ShareIcon";
import { NavLink } from 'react-router-dom';

import { useEffect, useState } from "react";

import ProfileIcon from "./icon/ProfileIcon"

import CoursesIcon from "./icon/CoursesIcon";
import TeachersIcon from "./icon/TeachersIcon";
import Message from "./icon/Message";
import ReviewsIcon from "./icon/ReviewsIcon";
import HamburgerIcon from "./icon/HamburgerIcon";
import Teachers from "./Teachers";
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

        <div className=" w-[80px]  tb:basis-[23%]">
            {isSmallMenu ? (
                <div className="flex flex-col  items-center w-full  ">
                    <HamburgerIcon />

                    <div className="w-full">
                        <NavLink
                            to="/myprofile/profile"
                            className={({ isActive }) => isActive ? "flex h-16 items-center justify-center border-l-2 border-l-blue-600 " : "tabs-slidebar"}  >
                            <ProfileIcon />
                        </NavLink>

                        <NavLink
                            to="/myprofile/my-courses"
                            className={({ isActive }) => isActive ? "flex h-16 items-center justify-center border-l-2 border-l-blue-600 " : "tabs-slidebar"}  >
                            <CoursesIcon />
                        </NavLink>
                        <NavLink
                            to="/myprofile/teachers"
                            className={({ isActive }) => isActive ? "flex h-16 items-center justify-center border-l-2 border-l-blue-600 " : "tabs-slidebar"}  >
                            <TeachersIcon />
                        </NavLink>
                        <NavLink
                            to="/myprofile/message"
                            className={({ isActive }) => isActive ? "flex h-16 items-center justify-center border-l-2 border-l-blue-600 " : "tabs-slidebar"}  >
                            <Message />
                        </NavLink>
                        <NavLink
                            to="/myprofile/my-reviews"
                            className={({ isActive }) => isActive ? "flex h-16 items-center justify-center border-l-2 border-l-blue-600 " : "tabs-slidebar"}  >
                            <ReviewsIcon />
                        </NavLink>
                    </div>
                </div>
            ) : (
                <div className="flex  grow-0 flex-col max-h-full w-full overflow-hidden bg-sl-main  items-center rounded-2xl pt-6 relative">
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
                </div>)}

        </div>



    );
};
export default ProfileTabs;