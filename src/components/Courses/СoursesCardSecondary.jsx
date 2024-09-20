import Star from './icon/Star';
import CoursesImg from "./img/CoursesImg.png";
import Subtitle from '@/components/ui/Subtitle';
import Rating from './Rating';
import CoursesImg10 from "@components/PageCategories/img/courseImg10.webp"
import CoursesImg2 from "@components/PageCategories/img/courseImg2.webp"
import CoursesImg3 from "@components/PageCategories/img/courseImg3.webp"
import SubheadingM from '@/components/ui/SubheadingM';
import { Link } from 'react-router-dom';

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
        title: "Modern Architecture ",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$114.9"
    },
    {
        coursesImg: CoursesImg3,
        title: "Digital Marketing Strategy ",
        author: "By Robery Slim",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
]
const CoursesCardSecondary = ({ styles, style }) => {
    return (
        <div>
            <div className={`grid grid-cols-1 ff:grid-cols-2 sm:gap-x-5 mx-auto sm:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-9 sm:place-items-center ${styles}`}>
                {
                    data.map((item) => {
                        return (
                            <CoursesItem {...item} />

                        )
                    })
                }
            </div>
        </div>
    )
}

const CoursesItem = ({ coursesImg, title, author, rating, info, price }) => {
    return (

        <div className='flex flex-col bg-white p-3     border-grey-border rounded-2xl border border-solid xs:gap-2 h-full w-full sm:max-w-[300px] md:max-w-[300px]'>
            <div className='rounded-lg h-[139px] overflow-hidden object-cover max-h-full'>
                <img className='max-w-full w-full object-cover h-full' src={coursesImg} alt="courses-img" loading={'lazy'} />
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

export default CoursesCardSecondary;