import Star from "@/components/Courses/icon/Star";
import Subtitle from "@/components/ui/Subtitle";
import SmallText from "@/components/ui/SmallText";
import InstructorsImg from "./img/InstructorsImg.svg"
import { Link, useNavigate } from "react-router-dom";
const data = [
    {
        instructorsImg: InstructorsImg,
        title: "Ronald Richards",
        subject: "UI/UX Designer",
        iconComponent: <Star />,
        ranking: "4.9",
        students: "2400 Students"

    },
    {
        instructorsImg: InstructorsImg,
        title: "Ronald Richards",
        subject: "UI/UX Designer",
        iconComponent: <Star />,
        ranking: "4.9",
        students: "2400 Students"

    },
    {
        instructorsImg: InstructorsImg,
        title: "Ronald Richards",
        subject: "UI/UX Designer",
        iconComponent: <Star />,
        ranking: "4.9",
        students: "2400 Students"

    },
    {
        instructorsImg: InstructorsImg,
        title: "Ronald Richards",
        subject: "UI/UX Designer",
        iconComponent: <Star />,
        ranking: "4.9",
        students: "2400 Students"

    },
    {
        instructorsImg: InstructorsImg,
        title: "Ronald Richards",
        subject: "UI/UX Designer",
        iconComponent: <Star />,
        ranking: "4.9",
        students: "2400 Students"

    }
]

const InstructorsCard = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate("/categories/mentorpage");
        }, 300);
    };
    return (
        <div>

            <div onClick={handleClick} className="grid grid-cols-1 ft:grid-cols-2 ss:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center pb-7 sm:pb-14">
                {
                    data.map((item) => {
                        return (
                            <div>
                                <InstructorsItem key={item.key} {...item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const InstructorsItem = ({ instructorsImg, title, subject, ranking, students }) => {
    return (
        <div className="flex flex-col  bg-white p-6  border-grey-border   rounded-2xl border border-solid max-w-64 hover:bg-blue-lite hover:scale-105 cursor-pointer duration-300 " >
            <div className=' rounded-lg overflow-hidden object-cover max-w-full max-h-full'>
                <img className='w-full  object-cover h-full' src={instructorsImg} alt="instructors-img" />
            </div>
            <div className="flex flex-col items-center pt-4 ">
                <Subtitle title={title} />
                <SmallText title={subject} />
            </div>

            <div className="flex justify-between  pt-8 items-center">
                <div className="flex  items-center ">
                    <div className=" w-5 h-5 ">
                        {<Star />}
                    </div>
                    <p className=" text-grey-900 text-xs font-semibold leading-4"> {ranking}</p>
                </div>
                <p className="text-grey-700 text-xs font-semibold leading-4">{students}</p>

            </div>

        </div >
    )
}



export default InstructorsCard