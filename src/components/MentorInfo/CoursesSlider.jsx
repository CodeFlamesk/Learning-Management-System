
import Star from '@components/Courses/icon/Star';
import CoursesImg from "../Courses/img/CoursesImg.png";
import HeaderBlock from '@components/HeadersBlock/HeaderBlock';
import SliderButton from '@components/ui/buttons/SliderButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation } from 'swiper/modules';
import Subtitle from '@components/ui/Subtitle';
import Rating from '@components/Courses/Rating';
import SubheadingM from '@components/ui/SubheadingM';
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
    }
]
const CourseSlide = ({ coursesImg, title, author, rating, info, price, }) => {
    return (
        <div className='flex flex-col  bg-white p-4 sm:p-6 border-grey-border   rounded-2xl border border-solid  sm:max-w-61 md:max-w-full'>
            <div className=' rounded-lg overflow-hidden object-cover max-h-full'>
                <img className='max-w-full  object-cover h-full' src={coursesImg} alt="courses-img" />
            </div>
            <div className='flex flex-col mt-2 sm:mt-4 '>
                <Subtitle title={title} />

                <p className='text-grey-700 text-sm  leading-5  sm:text-sm xs:py-0 py-1.5   font-normal sm:leading-5'>{author}</p>

                <div className='flex justify-between flex-wrap gap-1 items-center'>
                    <Rating iconComponent={<Star />} />
                    <p className='text-grey-700 text-xs font-semibold leading-4 '>{rating}</p>
                </div>

                <p className='text-grey-700 text-sm leading-5 x  sm:text-sm sm:py-2 font-normal sm:leading-5 tracking-normal'>{info}</p>
                <div className='mt-auto'>
                    <SubheadingM title={price} />
                </div>
            </div>
        </div>
    )
}
const CourseSlider = () => {
    return (
        <div className='max-w-screen-ct mx-auto px-5 sm:px-8 '>

            <div className={`flex flex-col ft:flex-row tfe:flex-nowrap  justify-between gap-3 sm:gap-5  mb-8 pt-7 sm:pt-14 items-center `} >
                <div className='flex flex-wrap w-full justify-center ft:justify-start'>
                    <h2 className='text-grey-900 font-semibold sm:leading-8 text-xl sm:text-2xl max-w-full  sm:max-w-72'>More Courses&nbsp;by&nbsp;</h2>
                    <h2 className='text-primary-600 font-semibold sm:leading-8  text-xl sm:text-2xl max-w-full  sm:max-w-72'>Ronald Richards</h2>

                </div>

                <SliderButton />

            </div>




            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={24}

                loop={true}
                navigation={{  // Додаємо параметри навігації
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }}
                breakpoints={{
                    140: {
                        slidesPerView: 1,
                        spaceBetween: 15,

                    },
                    370: {
                        slidesPerView: 1.2,
                        spaceBetween: 15,

                    },
                    479.98: {
                        slidesPerView: 1.5,
                        spaceBetween: 16,

                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16,

                    },
                    820: {
                        slidesPerView: 2.3,
                        spaceBetween: 16,


                    },
                    970: {
                        slidesPerView: 3,
                        spaceBetween: 16,

                    },


                    1358: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
            >

                {



                    data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='flex items-stretch  h-auto' >
                                <CourseSlide {...item} className='flex max-h-full' />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div >

    );
};

export default CourseSlider;
