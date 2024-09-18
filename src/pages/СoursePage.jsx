
import Container from "@/components/ui/Container";
import { useParams } from "react-router-dom";

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

