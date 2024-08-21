
import Container from "@/components/ui/Container";
import NavArrow from "@/components/ui/icons/NavArrow";
import { useParams } from "react-router-dom";


import CourseDescription from "@/components/CoursesPageCard/СourseDescription";
import TabsCourse from "@/components/CoursesPageCard/TabsCourseCard";

const CoursePage = () => {
    const { id } = useParams();
    return (
        <>

            <Container>
                <TabsCourse />
            </Container>
        </>

    );
};
export default CoursePage;

