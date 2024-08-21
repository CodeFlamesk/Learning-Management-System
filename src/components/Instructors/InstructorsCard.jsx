import Star from "@/components/Courses/icon/Star";

import HeaderBlock from '@/components/HeadersBlock/HeaderBlock';
import BlueButtonText from '@/components/ui/buttons/BlueButtonText';
import Subtitle from "@/components/ui/Subtitle";
import SmallText from "@/components/ui/SmallText";
import InstructorsImg from "./img/InstructorsImg.svg"
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
    return (
        <div>
           
            <div className="grid grid-cols-1 ft:grid-cols-2 ss:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center pb-7 sm:pb-14">
                {
                    data.map((item) => {
                        return (
                            <InstructorsItem key={item.key} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const InstructorsItem = ({ instructorsImg, title, subject, ranking, students }) => {
    return (
        <div className="flex flex-col  bg-white p-6  border-grey-border   rounded-2xl border border-solid max-w-64" >
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