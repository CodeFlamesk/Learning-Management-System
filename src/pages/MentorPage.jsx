import CoursesCard from "@components/Courses/CoursesCard";
import Reviews from "@components/CoursesPageCard/Reviews";
import CourseSlider from "@components/MentorInfo/CoursesSlider";
import MentorInfo from "@components/MentorInfo/MentorInfo";
import Container from "@components/ui/Container";
import { SwiperSlide } from "swiper/react";


const MentorPage = () => {
    return (
        <>

            <Container>
                <MentorInfo />
            </Container>
            <div className="max-w-full mx-auto px-5 sm:px-8 bg-sl-main pb-7 sm:pb-16 mt-10"><CourseSlider /></div>
            <Container>
                <Reviews styles="lg:w-full border-t-0" />
            </Container>

        </>



    );
};
export default MentorPage; 