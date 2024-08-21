
import Star from './icon/Star';
import CoursesImg from "./img/CoursesImg.svg";
import Subtitle from '@/components/ui/Subtitle';
import Rating from './Rating';

import SubheadingM from '@/components/ui/SubheadingM';

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
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",
        info: "22 Total Hours. 155 Lectures. Beginner",
        price: "$149.9"
    }
]
const CoursesCard = () => {
    return (
        <div>
            <div className='grid grid-cols-1   sm:grid-cols-2 sm:gap-x-5 mx-auto sm:mx-0 md:grid-cols-3 lg:grid-cols-4  gap-4 md:gap-9 sm:place-items-center '>
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
const CoursesItem = ({ coursesImg, title, author, rating, info, price, }) => {
    return (
        <div className='flex flex-col xs:flex-row sm:flex sm:flex-col bg-white p-6 xs:p-4 border-grey-border   rounded-2xl border border-solid xs:gap-2 sm:max-w-61 md:max-w-full'>
            <div className=' rounded-lg overflow-hidden object-cover max-h-full'>
                <img className='max-w-full  object-cover h-full' src={coursesImg} alt="courses-img" />
            </div>
            <div className='flex flex-col mt-2 sm:mt-4 xs:mt-0'>
                <Subtitle title={title} />

                <p className='text-grey-700 text-sm xs:text-xs leading-5 xs:leading-4 sm:text-sm xs:py-0 py-1.5 sm:py-1.5  font-normal sm:leading-5'>{author}</p>

                <div className='flex justify-between flex-wrap gap-1 items-center'>
                    <Rating iconComponent={<Star />} />
                    <p className='text-grey-700 text-xs font-semibold leading-4 '>{rating}</p>
                </div>

                <p className='text-grey-700 text-sm leading-5 xs:leading-4 xs:text-xs sm:text-sm sm:py-2 font-normal sm:leading-5 tracking-normal'>{info}</p>
                <div className='mt-auto'>
                    <SubheadingM title={price} />
                </div>
            </div>
        </div>
    )
}
export default CoursesCard