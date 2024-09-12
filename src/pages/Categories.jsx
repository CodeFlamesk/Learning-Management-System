import AllCourses from "@/components/PageCategories/AllCourses"
import Container from "@/components/ui/Container"
import InstructorsCard from "@/components/Instructors/InstructorsCard"
import CoursesCard from "@/components/Courses/CoursesCard"


const Categories = () => {
    return (
        <>
            <Container >
                <AllCourses />
            </Container>
            <div className="max-w-full mx-auto px-5 sm:px-8 bg-sl-main mt-8 ">
                <div className="bg-sl-man  max-w-screen-ct mx-auto pt-60w sm:px-8">
                    <h3 className="pb-6 text-2xl  text-grey-900   font-semibold ">Popular Mentors</h3>
                    <InstructorsCard />
                </div>

            </div>
            <Container styles={'pb-60w pt-60w'}>
                <h3 className="pb-6  text-2xl  text-grey-900   font-semibold ">Featured Courses</h3>
                <CoursesCard />
            </Container>
        </>
    )
}
export default Categories;