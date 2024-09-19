import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";
import CourseDescription from "./СourseDescription";
import Footer from "@/components/Footer/Footer";
import TabsCourse from "./TabsCourseCard";
import Container from "@/components/ui/Container";
import CommentsSlider from "@/components/CommentsSlider/CommentsSlider";
import CoursesCard from "@/components/Courses/CoursesCard";
import { Suspense } from "react";
import CoursesCardSecondary from "@components/Courses/СoursesCardSecondary";

const LayoutCourse = () => {



    return (
        <div className={`w-full  flex flex-col  `}>
            <Header />

            <div className="w-full mx-auto  bg-sl-main">
                <Container>
                    <CourseDescription />
                </Container>

            </div>
            <div className="w-full mx-auto ">
                <Container>

                    <TabsCourse />
                    <main >
                        <Suspense>
                            <Outlet />
                        </Suspense>

                    </main>
                </Container>
                <div className="max-w-full mx-auto px-5 sm:px-8 bg-sl-main pb-7 sm:pb-16"><CommentsSlider /> </div>
            </div>
            <Container styles={'pb-60w pt-60w'}>
                <h3 className="pb-6  text-2xl  text-grey-900   font-semibold ">Featured Courses</h3>
                <CoursesCardSecondary />
            </Container>
            <Footer />
        </div>
    );
};

export default LayoutCourse;