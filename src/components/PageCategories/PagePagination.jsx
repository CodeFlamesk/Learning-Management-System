
import React from 'react';
import CoursesImg from "./img/CoursesImg.svg";
import Star from '@/components/Courses/icon/Star';
import PaginationFunction from "@components/Pagination/PaginationaFunction";
import Subtitle from "@components/ui/Subtitle";
import Rating from "@components/Courses/Rating";
import SubheadingM from "@components/ui/SubheadingM";
import { Link } from "react-router-dom";
import CoursesImg1 from "./img/courseImg1.webp"
import CoursesImg2 from "./img/courseImg2.webp"
import CoursesImg3 from "./img/courseImg3.webp"
import CoursesImg4 from "./img/courseImg4.webp"
import CoursesImg5 from "./img/courseImg5.webp"
import CoursesImg6 from "./img/courseImg6.webp"
import CoursesImg7 from "./img/courseImg7.webp"
import CoursesImg8 from "./img/courseImg8.webp"
import CoursesImg9 from "./img/courseImg9.webp"
import CoursesImg10 from "./img/courseImg10.webp"
const data = [
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg10,
        title: "3D Modeling",
        author: "By Cub Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
    {
        coursesImg: CoursesImg2,
        title: "Fundamentals of Modern Architecture",
        author: "By Tirtle Kun",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$170"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "28 Total Hours. 20 Lectures. Beginner",
        price: "$155"
    },
    {
        coursesImg: CoursesImg4,
        title: "Cybersecurity Basics",
        author: "By Cyber Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$359.9"
    },
    {
        coursesImg: CoursesImg5,
        title: "Architectural Photography",
        author: "By Photo Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$180"
    },
    {
        coursesImg: CoursesImg6,
        title: "UI/UX Design",
        author: "By Leo Mikso",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$90"
    },
    {
        coursesImg: CoursesImg7,
        title: "Management with SQL",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$1200"
    },
    {
        coursesImg: CoursesImg1,
        title: "English",
        author: "By Speak English",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg5,
        title: "Design in Architecture",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy ",
        author: "By Robery Slim",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$148"
    },
    {
        coursesImg: CoursesImg7,
        title: "Management with SQL",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg2,
        title: "Fundamentals of Modern Architecture",
        author: "By Tirtle Kun",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$170"
    },
    {
        coursesImg: CoursesImg10,
        title: "English",
        author: "By Aristocrat ",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg10,
        title: "3D Modeling",
        author: "By Cub Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg9,
        title: "Mastering CCNP Certification",
        author: "By CinoCourse",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$130"
    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$1200"
    },
    {
        coursesImg: CoursesImg5,
        title: "Architectural Photography",
        author: "By Photo Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$180"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "28 Total Hours. 20 Lectures. Beginner",
        price: "$155"
    },
    {
        coursesImg: CoursesImg2,
        title: "Modern Architecture",
        author: "By Leonardo",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg1,
        title: "English",
        author: "By Speak English",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$1200"
    },
    {
        coursesImg: CoursesImg9,
        title: "Mastering CCNP Certification",
        author: "By CinoCourse",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$130"
    },
    {
        coursesImg: CoursesImg10,
        title: "3D Modeling",
        author: "By Cub Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
    {
        coursesImg: CoursesImg4,
        title: "Cybersecurity Basics",
        author: "By Cyber Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$359.9"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "28 Total Hours. 20 Lectures. Beginner",
        price: "$155"
    },
    {
        coursesImg: CoursesImg9,
        title: "Mastering CCNP Certification",
        author: "By CinoCourse",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$130"
    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$1200"
    },
    {
        coursesImg: CoursesImg7,
        title: "Management with SQL",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg6,
        title: "UI/UX Design",
        author: "By Leo Mikso",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$90"
    },
    {
        coursesImg: CoursesImg5,
        title: "Architectural Photography",
        author: "By Photo Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$180"
    },
    {
        coursesImg: CoursesImg4,
        title: "Cybersecurity Basics",
        author: "By Cyber Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$359.9"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "28 Total Hours. 20 Lectures. Beginner",
        price: "$155"
    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg2,
        title: "Modern Architecture",
        author: "By Leonardo",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg1,
        title: "English",
        author: "By Speak English",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg10,
        title: "3D Modeling",
        author: "By Cub Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
    {
        coursesImg: CoursesImg2,
        title: "Modern Architecture ",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$114.9"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy ",
        author: "By Robery Slim",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
    {
        coursesImg: CoursesImg4,
        title: "Cybersecurity Basics",
        author: "By Cyber Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$359.9"
    },
    {
        coursesImg: CoursesImg5,
        title: "Architectural Photography",
        author: "By Photo Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$180"
    },
    {
        coursesImg: CoursesImg6,
        title: "UI/UX Design",
        author: "By Leo Mikso",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$90"
    },
    {
        coursesImg: CoursesImg7,
        title: "Management with SQL",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$1200"
    },
    {
        coursesImg: CoursesImg1,
        title: "English",
        author: "By Speak English",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg5,
        title: "Architectural Photography",
        author: "By Photo Proton",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$179.9"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy ",
        author: "By Robery Slim",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$115"
    },
    {
        coursesImg: CoursesImg7,
        title: "Management with SQL",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg2,
        title: "Modern Architecture ",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg10,
        title: "3D Modeling",
        author: "By Proto Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$300"
    },
    {
        coursesImg: CoursesImg1,
        title: "English",
        author: "By English Speak",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg9,
        title: "Mastering CCNP Certification",
        author: "By CinoCourse",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$130"
    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$1200"
    },
    {
        coursesImg: CoursesImg5,
        title: "Architectural Photography",
        author: "By Photo Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$180"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "28 Total Hours. 20 Lectures. Beginner",
        price: "$155"
    },
    {
        coursesImg: CoursesImg2,
        title: "Modern Architecture",
        author: "By Leonardo",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg1,
        title: "English",
        author: "By Speak English",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$1200"
    },
    {
        coursesImg: CoursesImg9,
        title: "Mastering CCNP Certification",
        author: "By CinoCourse",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$130"
    },
    {
        coursesImg: CoursesImg10,
        title: "3D Modeling",
        author: "By Cub Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
    {
        coursesImg: CoursesImg4,
        title: "Cybersecurity Basics",
        author: "By Cyber Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$359.9"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "28 Total Hours. 20 Lectures. Beginner",
        price: "$155"
    },
    {
        coursesImg: CoursesImg9,
        title: "Mastering CCNP Certification",
        author: "By CinoCourse",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$130"
    },
    {
        coursesImg: CoursesImg8,
        title: "Full-Stack Development",
        author: "By ProgPes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$1200"
    },
    {
        coursesImg: CoursesImg7,
        title: "Management with SQL",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg6,
        title: "UI/UX Design",
        author: "By Leo Mikso",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$90"
    },
    {
        coursesImg: CoursesImg5,
        title: "Architectural Photography",
        author: "By Photo Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$180"
    },
    {
        coursesImg: CoursesImg4,
        title: "Cybersecurity Basics",
        author: "By Cyber Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$359.9"
    },
    {
        coursesImg: CoursesImg3,
        title: "Marketing Strategy",
        author: "By Stalke Mark.",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "28 Total Hours. 20 Lectures. Beginner",
        price: "$155"
    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg2,
        title: "Modern Architecture",
        author: "By Leonardo",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        coursesImg: CoursesImg1,
        title: "English",
        author: "By Speak English",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
];

const Courses = () => {
    return (
        <div className="flex flex-col">
            <PaginationFunction
                itemsPerPage={9}
                data={data}
                title='Courses'
                showValue1='9'
                showValue2='18'
                showValue3='27'
                stylesRender="grid grid-cols-1 items-center xs:grid-cols-2 sm:gap-x-5 mx-auto sm:mx-0 sm:grid-cols-3 gap-4 sm:gap-9 sm:place-items-center"
                renderItem={(item, index) => (
                    <Link to={`/categories/${index + 1}/details/description`} className='flex h-full'>
                        <CoursesItem
                            key={item.title + index}
                            {...item}
                        />
                    </Link>

                )}
            />
        </div>
    );
};
export default Courses;

const CoursesItem = ({ coursesImg, title, author, rating, info, price }) => {
    return (
        <div className='flex flex-col bg-white p-3 border-grey-border rounded-2xl border border-solid xs:gap-2 h-full w-full sm:max-w-[300px] md:max-w-[300px]'>
            <div className='rounded-lg h-[139px] overflow-hidden object-cover max-h-full'>
                <img className='max-w-full w-full object-cover h-full' src={coursesImg} alt="courses-img" />
            </div>
            <div className='flex flex-col mt-2 xs:mt-0 flex-1'>
                <Subtitle title={title} />
                <p className='text-grey-700 text-sm xs:text-xs leading-5 xs:leading-4 sm:text-sm xs:py-0 py-1.5 sm:py-1.5 font-normal sm:leading-5'>
                    {author}
                </p>
                <div className='flex justify-between flex-wrap gap-1 items-center'>
                    <Rating iconComponent={<Star />} />
                    <p className='text-grey-700 text-xs font-semibold leading-4'>{rating}</p>
                </div>
                <p className='text-grey-700 text-sm leading-5 xs:leading-4 xs:text-xs sm:text-sm sm:py-2 font-normal sm:leading-5 tracking-normal'>
                    {info}
                </p>
                <div className='mt-auto'>
                    <SubheadingM title={price} />
                </div>
            </div>
        </div>
    );
};




