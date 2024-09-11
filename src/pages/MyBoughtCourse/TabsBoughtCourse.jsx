import SmallText from "@/components/ui/SmallText";
import React from 'react';

import { NavLink } from 'react-router-dom';
const TabsBoughtCourse = () => {


    return (


        <div className="flex  w-full ">
            <div className="w-full flex flex-wrap gap-4 lg:gap-[1.275%] xl:gap-5 pt-6 lg:pt-10 justify-evenly lg:justify-start">

                <NavLink
                    to={`description`}
                    className={({ isActive }) => isActive ? "active" : "button-tabs"}
                >
                    <SmallText styles="text-sm" title="Details " />
                </NavLink>
                <NavLink
                    to={`instructors`}
                    className={({ isActive }) => isActive ? "active" : "button-tabs"}
                >
                    <SmallText styles="text-sm" title="Instructor" />
                </NavLink>
                <NavLink
                    to={`courses`}
                    className={({ isActive }) => isActive ? "active" : "button-tabs"}
                >
                    <SmallText styles="text-sm" title="Courses" />
                </NavLink>
                <NavLink
                    to={`reviews`}
                    className={({ isActive }) => isActive ? "active" : "button-tabs"}
                >
                    <SmallText styles="text-sm" title="Reviews" />
                </NavLink>
            </div>
        </div>

    );
};

export default TabsBoughtCourse;

