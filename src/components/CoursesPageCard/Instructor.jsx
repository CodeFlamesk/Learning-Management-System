import Subheading from "@/components/ui/Subheading";
import Paragraph from "@/components/ui/Paragraph";
import Author from "./img/author.webp";
import GraduationHatIcon from "./icon/GraduationHat";
import SmallText from "@/components/ui/SmallText";
import ReviewsIcon from "./icon/Reviews";
import PlayIcon from "./icon/Play";

const Instructor = () => {
    return (
        <div className="flex pt-6 pb-6">
            <div className=" lg:basis-[65%] border-t   border-grey-border">
                <Subheading styles="pt-6" title="Instructor" />
                <Subheading styles="pt-4 text-primary-600" title="Ronald Richards" />
                <Paragraph>UI/UX Designer</Paragraph>
                <div className="flex  items-center gap-4 mt-4">
                    <a href="#" className="flex relative overflow-hidden w-94 h-94 sm:w-32 sm:h-32 rounded-full">
                        <img src={Author} alt="Author" className="w-94 h-94 sm:w-32 sm:h-32 rounded-full hover:scale-150 duration-300 transition-all" />
                    </a>

                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                            <ReviewsIcon />
                            <SmallText title="40,445 Reviews" />
                        </div>
                        <div className="flex gap-1 items-center">
                            <GraduationHatIcon />
                            <SmallText title="500 Students" />
                        </div>
                        <div className="flex gap-1 items-center">
                            <PlayIcon />
                            <SmallText title="15 Courses" />
                        </div>
                    </div>
                </div>
                <Paragraph styles="pt-4">With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences. </Paragraph>

            </div>

        </div>
    )
}
export default Instructor;