import Star from "@components/Courses/icon/Star";
import PaginationFunction from "@components/Pagination/PaginationaFunction";


import Rating from "@components/Courses/Rating";

import ProfilesFilter from "./ProfilesFilter";
import { Link } from "react-router-dom";
import CoursesImg1 from "@components/PageCategories/img/courseImg1.webp"
import CoursesImg2 from "@components/PageCategories/img/courseImg2.webp"
import CoursesImg3 from "@components/PageCategories/img/courseImg3.webp"
import CoursesImg4 from "@components/PageCategories/img/courseImg4.webp"
import CoursesImg5 from "@components/PageCategories/img/courseImg5.webp"
import CoursesImg6 from "@components/PageCategories/img/courseImg6.webp"
import CoursesImg7 from "@components/PageCategories/img/courseImg7.webp"
import CoursesImg8 from "@components/PageCategories/img/courseImg8.webp"

const data = [
    {
        coursesImg: CoursesImg6,
        title: "UI/UX Design",
        author: "By Leo Mikso",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg2,
        title: "Fundamentals of Modern Architecture",
        author: "By Tirtle Kun",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg4,
        title: "Cybersecurity Basics",
        author: "By Cyber Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg5,
        title: "Architectural Photography",
        author: "By Photo Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg6,
        title: "UI/UX Design",
        author: "By Leo Mikso",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg7,
        title: "Management with SQL",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg6,
        title: "UI/UX Design",
        author: "By Leo Mikso",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg2,
        title: "Fundamentals of Modern Architecture",
        author: "By Tirtle Kun",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy Online With Mentor",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg6,
        title: "UI/UX Design",
        author: "By Leo Mikso",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },



]
const MyCourses = () => {
    return (
        <div className="flex flex-col">
            <PaginationFunction
                itemsPerPage={3}
                data={data}
                title='Courses'
                showValue1='3'
                showValue2='9'
                showValue3='12'
                stylesRender="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-3 "
                renderItem={(item, index) => (
                    <Link key={index} to={`/bought-course/${index}/description`} >
                        <MyCoursesItem {...item} />
                    </Link>
                )}
            >
                <ProfilesFilter styles="mt-2" />
            </PaginationFunction>
        </div>
    );
};

export default MyCourses;
const MyCoursesItem = ({ coursesImg, title, author, rating }) => {
    return (
        <div className='flex flex-col bg-white p-3 border-grey-border rounded-2xl border border-solid h-full max-w-sm mx-auto'>
            <div className='rounded-lg h-36 overflow-hidden'>
                <img className='object-cover w-full h-full' src={coursesImg} alt="courses-img" />
            </div>
            <div className='flex flex-col mt-2 flex-1'>
                <p className="text-grey-900 text-base font-semibold">{title}</p>
                <p className='text-grey-700 text-sm leading-5 font-normal mb-1'>{author}</p>
                <span className="flex w-full bg-primary-100 h-1 rounded-full relative mt-auto">
                    <span className="flex w-[80%] bg-blue h-1 rounded-full"></span>
                </span>
                <div className='flex justify-between items-center  pt-1.5'>
                    <Rating iconComponent={<Star />} />
                    <p className='text-grey-700 text-xs font-semibold'>{rating}</p>
                </div>
            </div>
        </div>
    );
};
