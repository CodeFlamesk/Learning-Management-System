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
        title: "1Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "2Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "3Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "4Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "5Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "6Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "7Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "8Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "9Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "3Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "23Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "22Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "4Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "5Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },
    {
        title: "6Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"
    },


    {
        title: "Beginner’s Guide to Design",
        iconComponent: <Star />,
        review: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding"

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
