import HeaderBlock from '@/components/HeadersBlock/HeaderBlock';
import BlueButtonText from '@/components/ui/buttons/BlueButtonText';

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