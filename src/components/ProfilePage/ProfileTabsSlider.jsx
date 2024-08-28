import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import ProfileIcon from "./icon/ProfileIcon";
import CoursesIcon from "./icon/CoursesIcon";
import TeachersIcon from "./icon/TeachersIcon";
import Message from "./icon/Message";
import ReviewsIcon from "./icon/ReviewsIcon";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const ProfileTabsSlider = () => {
    return (
        <div >
            <div className="swiper-pagination"></div>
            <Swiper
                spaceBetween={24}
                slidesPerView="auto"
                speed={1000}

                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.swiper-pagination',
                    type: 'progressbar',
                }}
                className="w-full"
            >
                <SwiperSlide className="w-auto ">
                    <NavLink
                        to="/myprofile/profile"
                        className={({ isActive }) =>
                            isActive
                                ? "active-profile-icon"
                                : "tabs-slidebar"
                        }
                    >
                        <ProfileIcon />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className="w-auto">
                    <NavLink
                        to="/myprofile/my-courses"
                        className={({ isActive }) =>
                            isActive
                                ? "active-profile-icon"
                                : "tabs-slidebar"
                        }
                    >
                        <CoursesIcon />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className="w-auto">
                    <NavLink
                        to="/myprofile/teachers"
                        className={({ isActive }) =>
                            isActive
                                ? "active-profile-icon"
                                : "tabs-slidebar"
                        }
                    >
                        <TeachersIcon />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className="w-auto">
                    <NavLink
                        to="/myprofile/message"
                        className={({ isActive }) =>
                            isActive
                                ? "active-profile-icon"
                                : "tabs-slidebar"
                        }
                    >
                        <Message />
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide className="w-auto">
                    <NavLink
                        to="/myprofile/my-reviews"
                        className={({ isActive }) =>
                            isActive
                                ? "active-profile-icon"
                                : "tabs-slidebar"
                        }
                    >
                        <ReviewsIcon />
                    </NavLink>
                </SwiperSlide>




            </Swiper>



        </div>
    );
};

export default ProfileTabsSlider;
