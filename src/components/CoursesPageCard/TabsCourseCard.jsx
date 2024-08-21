import SmallText from "@/components/ui/SmallText";
import React from 'react';

import { NavLink, useParams } from 'react-router-dom';
const TabsCourse = () => {
    const { id } = useParams();

    return (


        <div className=" flex pt-6  lg:basis-[65%] border-t  border-grey-border ">
            <div className="flex flex-wrap gap-4 lg:gap-[1.275%] xl:gap-6 lg:pt-10 justify-evenly lg:justify-start">

                <NavLink
                    to={`details/description`}
                    className={({ isActive }) => isActive ? "active" : "button-tabs"}
                >
                    <SmallText styles="text-sm" title="Description " />
                </NavLink>
                <NavLink
                    to={`details/instructor`}
                    className={({ isActive }) => isActive ? "active" : "button-tabs"}
                >
                    <SmallText styles="text-sm" title="Instructor" />
                </NavLink>
                <NavLink
                    to={`details/syllabus`}
                    className={({ isActive }) => isActive ? "active" : "button-tabs"}
                >
                    <SmallText styles="text-sm" title="Syllabus" />
                </NavLink>
                <NavLink
                    to={`details/reviews`}
                    className={({ isActive }) => isActive ? "active" : "button-tabs"}
                >
                    <SmallText styles="text-sm" title="Reviews" />
                </NavLink>
            </div>
        </div>









    );
};

export default TabsCourse;

