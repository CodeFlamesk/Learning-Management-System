
import Star from '@components/Courses/icon/Star';
import CoursesImg from "@components/Courses/img/CoursesImg.png";
import Subtitle from '@components/ui/Subtitle';
import Rating from '@components/Courses/Rating';
import SubheadingM from '@components/ui/SubheadingM';
import PaginationFunction from "@components/Pagination/PaginationaFunction";
import { Link } from "react-router-dom";
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


const Courses = () => {
    return (
        <div className="flex flex-col pb-6 pt-6">
            <span className=' border-t   border-grey-border pb-6 ' />
            <PaginationFunction
                itemsPerPage={3}
                data={data}
                title='Courses'
                showValue1='3'
                showValue2='6'
                showValue3='9'
                stylesRender="grid grid-cols-1 xs:grid-cols-2 sm:gap-x-5 sm:grid-cols-3 gap-4 sm:gap-9 "
                renderItem={(item, index) => (
                    <Link to={`/categories/${index + 1}/details/description`}>
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
        <div className='flex flex-col  bg-white p-3  border-grey-border rounded-2xl border border-solid xs:gap-2 sm:max-w-61 md:max-w-full'>
            <div className='w-full rounded-lg overflow-hidden object-cover max-h-full'>
                <img className='w-full object-cover h-full' src={coursesImg} alt="courses-img" />
            </div>
            <div className='flex flex-col mt-2  xs:mt-0'>
                <Subtitle title={title} />
                <p className='text-grey-700 text-sm xs:text-xs leading-5 xs:leading-4 sm:text-sm xs:py-0 py-1.5 sm:py-1.5 font-normal sm:leading-5'>{author}</p>
                <div className='flex justify-between flex-wrap gap-1 items-center'>
                    <Rating iconComponent={<Star />} />
                    <p className='text-grey-700 text-xs font-semibold leading-4'>{rating}</p>
                </div>
                <p className='text-grey-700 text-sm leading-5 xs:leading-4 xs:text-xs sm:text-sm sm:py-2 font-normal sm:leading-5 tracking-normal'>{info}</p>
                <div className='mt-auto'>
                    <SubheadingM title={price} />
                </div>
            </div>
        </div>
    );
};