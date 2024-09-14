import PaginationFunction from "@components/Pagination/PaginationaFunction";
import Subtitle from '@/components/ui/Subtitle';
import Rating from "@components/Courses/Rating";
import Star from "@components/Courses/icon/Star";
import { useEffect, useRef, useState } from "react";
import SmallText from "@components/ui/SmallText";
import DotsIcon from "./icon/DotsIcon";
import CloseIcon from "./icon/CloseIcon";

const data = [
    {
        title: "Design Fundamentals: Zero to Hero",
        iconComponent: <Star />,
        review: "Initially, I was hesitant due to my lack of design experience. However, the instructor, John Doe, excelled at making complex concepts easy to understand. The video lectures were highly engaging, and the practical examples made the material stick. This course truly transformed my approach to design!"
    },
    {
        title: "Essential Design Principles",
        iconComponent: <Star />,
        review: "I started with little knowledge of design, but John Doe’s clear explanations and well-structured modules helped me grasp the basics quickly. The course is filled with interactive lectures and relevant examples that helped me build a solid foundation in design."
    },
    {
        title: "Introduction to Graphic Design",
        iconComponent: <Star />,
        review: "As someone with no prior design experience, I found this course to be incredibly useful. John Doe's teaching style made the complex material accessible and engaging. The real-world scenarios provided in the course helped me apply what I learned effectively."
    },
    {
        title: "Blueprint for Graphic Design Success",
        iconComponent: <Star />,
        review: "This course exceeded my expectations. John Doe’s ability to break down design principles into manageable sections made learning enjoyable. The combination of video lectures and practical exercises helped me gain confidence in my design skills."
    },
    {
        title: "Foundations of Design",
        iconComponent: <Star />,
        review: "I was new to design, and this course was the perfect starting point. John Doe’s teaching was clear and supportive, making complex topics easy to understand. The practical examples and interactive content were instrumental in my learning process."
    },
    {
        title: "Mastering Design Basics",
        iconComponent: <Star />,
        review: "The course provided a thorough introduction to design. John Doe’s method of teaching made even the most complicated concepts approachable. The engaging lectures and real-life examples helped reinforce my understanding and skills."
    },
    {
        title: "Graphic Design 101",
        iconComponent: <Star />,
        review: "John Doe did a fantastic job of making design accessible to beginners. The course covered essential principles with engaging content and practical exercises. I felt well-prepared to start applying design concepts in real-world scenarios by the end."
    }

]



const MyReviews = () => {

    return (
        <div className="flex flex-col">

            <PaginationFunction itemsPerPage={3}
                stylesRender="flex flex-col gap-6"
                data={data}
                title='Reviews'
                showValue1='3'
                showValue2='5'
                showValue3='10'
                renderItem={(item, index) => (
                    <ReviewItem
                        key={item.title + index}
                        {...item}
                    />
                )} />
        </div>

    );
};

// Компонент для відображення одного курсу
const ReviewItem = ({ title, review, iconComponent }) => {
    const [more, setMore] = useState(false)
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMore(false);
            }
        };
        if (more) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else { document.removeEventListener("mousedown", handleClickOutside); }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [more]);
    return (
        <div className='flex flex-col gap-4 border border-grey-border rounded-2xl p-4 items-start relative '>
            <div className="flex justify-between gap-4 w-full items-center">
                <div className="flex items-center gap-2">
                    <SmallText title="Course&nbsp;Name:" />
                    <Subtitle title={title} styles="text-sm leading-7 xs:leading-7" />
                </div>

                <button onClick={() => setMore(!more)}>{more ? (
                    <>  <div className="pr-2 mt-1">  <DotsIcon /></div>
                        <div ref={menuRef} className="flex  p-2 justify-center items-center absolute gap-6 border-2 border-grey-border bg-white  rounded-lg top-3 right-3">
                            <button className="button-line mt-1 group">
                                <p className='text-line'>Report</p>
                                <span className="red-line  group-hover:w-full"></span>
                            </button>
                            <CloseIcon />
                        </div></>)
                    : (<div className="pr-2 xs:mt-1">  <DotsIcon /></div>)}
                </button>

            </div>
            <div className="flex gap-2 items-center">
                <SmallText title="Rating:" />
                <Rating iconComponent={iconComponent} />
            </div>
            <div className="flex gap-2 ">
                <SmallText title="Review:" />
                <p className="text-grey-700   text-sm sm:text-base font-normal">{review}</p>
            </div>

        </div>



    );
};

export default MyReviews;
