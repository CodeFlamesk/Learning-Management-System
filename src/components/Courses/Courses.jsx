import HeaderBlock from '@/components/HeadersBlock/HeaderBlock';
import BlueButtonText from '@/components/ui/buttons/BlueButtonText';
import CoursesCard from './CoursesCard';


const Courses = () => {
    return (
        <div>
            <HeaderBlock title={"Top Courses"}>

                <BlueButtonText text={"See All"} />
            </HeaderBlock>
           <CoursesCard/>
        </div>
    )
}

export default Courses