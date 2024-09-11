
import Container from '@components/ui/Container';
import Categories from '@components/Home/categories/Categories';
import MainSlider from '@components/MainSlider/MainSlider';
import Courses from '@components/Courses/Courses';
import Instructors from '@components/Instructors/Instructors';
import CommentsSlider from '@components/CommentsSlider/CommentsSlider';
import BecomeInstructor from '@components/Home/BecomeInstructor/BecomeInstructor';
import CheckoutCourses from '@components/Home/BecomeInstructor/CheckoutCourses';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import CoursesNumber from '@components/CoursesNumber/CoursesNumber';


const Home = () => {
    return (
        <>


            <Container styles="pb-6"><MainSlider /></Container>
            <div className="max-w-full mx-auto px-5 sm:px-8 bg-sl-main"><CoursesNumber /></div>

            <Container >
                <Categories />
                <Courses />
                <Instructors />
            </Container>

            <div className="max-w-full mx-auto px-5 sm:px-8 bg-sl-main pb-7 sm:pb-16"><CommentsSlider /> </div>
            <Container >
                <BecomeInstructor />
                <CheckoutCourses />
            </Container>





        </>
    )
}

export default Home
