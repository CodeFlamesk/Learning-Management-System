import Star from "@components/Courses/icon/Star";
import PaginationFunction from "@components/Pagination/PaginationaFunction";
import CoursesImg from "../Courses/img/CoursesImg.png";
import Subtitle from '@/components/ui/Subtitle';
import Rating from "@components/Courses/Rating";
import SubheadingM from "@components/ui/SubheadingM";
import ProfilesFilter from "./ProfilesFilter";


const data = [
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    },
    {
        coursesImg: CoursesImg,
        title: "Beginner’s Guide to Design",
        author: "By Ronald Richards",
        iconComponent: <Star />,
        rating: "(1200 Ratings)",


    }
]
const MyCourses = () => {
    return (
        <div className="flex flex-col">

            <PaginationFunction itemsPerPage={3}
                data={data}
                title='Courses'
                showValue1='3'
                showValue2='9'
                showValue3='12'
                stylesRender="grid grid-cols-1 items-center  xs:grid-cols-2 sm:gap-x-5 mx-auto sm:mx-0 sm:grid-cols-3   gap-4 sm:gap-9 sm:place-items-center"

                renderItem={(item, index) => (

                    <MyCoursesItem
                        key={item.title + index}
                        {...item}
                    />
                )} >  <ProfilesFilter styles="mt-2" />  </PaginationFunction>


        </div>
    );
};
export default MyCourses;
const MyCoursesItem = ({ coursesImg, title, author, rating }) => {

    return (
        <div className=' flex flex-col ml-3 xs:ml-0 mr-3 mt-4 xs:mr-0  bg-white  p-3 border-grey-border   rounded-2xl border border-solid xs:gap-2 sm:max-w-61 md:max-w-full'>
            <div className='w-full rounded-lg overflow-hidden object-cover max-h-full'>
                <img className='  object-cover h-full' src={coursesImg} alt="courses-img" />
            </div>
            <div className='flex flex-col mt-2  xs:mt-0'>
                <p className="text-grey-900 text-base sm:text-lg font-semibold" >{title}</p>

                <p className='text-grey-700 text-sm xs:text-xs leading-5 xs:leading-4 sm:text-sm pb-2 pt-1.5   font-normal sm:leading-5'>{author}</p>
                <span className="flex w-full bg-primary-100 h-[3px] rounded-60r relative">
                    <span className="flex w-[80%] bg-blue h-[3px]  rounded-60r"></span>
                </span>
                <div className='flex justify-between flex-wrap gap-1 items-center pt-1.5'>
                    <Rating iconComponent={<Star />} />
                    <p className='text-grey-700 text-xs font-semibold leading-4 '>{rating}</p>
                </div>


            </div>
        </div>

    );
};