import { useNavigate } from 'react-router-dom';
import Star from './icon/Star';
import CoursesImg from "./img/CoursesImg.webp";
import Subtitle from '@/components/ui/Subtitle';
import Rating from './Rating';
import CoursesImg10 from "@components/PageCategories/img/courseImg10.webp";
import CoursesImg2 from "@components/PageCategories/img/courseImg2.webp";
import CoursesImg3 from "@components/PageCategories/img/courseImg3.webp";
import SubheadingM from '@/components/ui/SubheadingM';

const data = [
    {
        id: 1,
        coursesImg: CoursesImg,
        title: "Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    },
    {
        id: 2,
        coursesImg: CoursesImg10,
        title: "3D Modeling",
        author: "By Cub Pes",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
    {
        id: 3,
        coursesImg: CoursesImg2,
        title: "Modern Architecture",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$114.9"
    },
    {
        id: 4,
        coursesImg: CoursesImg3,
        title: "Digital Marketing Strategy",
        author: "By Robery Slim",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$100"
    },
];

const CoursesCard = ({ styles, style }) => {
    const navigate = useNavigate();

    const handleClick = (itemId) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate(`/categories/${itemId}/details/description`);
        }, 300);
    };

    return (
        <div>
            <div className={`grid grid-cols-1 ff:grid-cols-2 sm:gap-x-5 mx-auto sm:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-9 sm:place-items-center ${styles}`}>
                {
                    data.map((item) => (
                        <p onClick={() => handleClick(item.id)} key={item.id} className={`${style}`}>
                            <CoursesItem {...item} />
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

const CoursesItem = ({ coursesImg, title, author, rating, info, price }) => {
    return (
        <div className='flex flex-col bg-white p-3 cursor-pointer hover:bg-blue-lite hover:scale-105 duration-300 border-grey-border rounded-2xl border border-solid xs:gap-2 h-full w-full sm:max-w-[300px] md:max-w-[300px]'>
            <div className='rounded-lg h-[139px] overflow-hidden object-cover max-h-full'>
                <img className='max-w-full w-full object-cover h-full' src={coursesImg} alt="courses-img" loading={'lazy'} width="256" height="139" />
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

export default CoursesCard;
