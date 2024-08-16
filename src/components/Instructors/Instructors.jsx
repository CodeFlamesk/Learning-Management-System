import Star from "@/components/Courses/icon/Star";

import HeaderBlock from '@/components/HeadersBlock/HeaderBlock';
import BlueButtonText from '@/components/ui/buttons/BlueButtonText';
import Subtitle from "@/components/ui/Subtitle";
import SmallText from "@/components/ui/SmallText";
import InstructorsImg from "./img/InstructorsImg.svg"
import InstructorsCard from "./InstructorsCard";


const Instructors = () => {
    return (
        <div>
            <HeaderBlock title={"Top Instructors"}>
                <BlueButtonText text={"See All"} />
            </HeaderBlock>
           <InstructorsCard />
        </div>
    )
}





export default Instructors