
import Container from '@components/ui/Container';
import Categories from '@components/Home/categories/Categories';
import MainSlider from '@components/MainSlider/MainSlider';
import CoursesNumber from '@components/CoursesNumber/CoursesNumber';
import { lazy } from 'react';

const Courses = lazy(() => import('@components/Courses/Courses'));
const Instructors = lazy(() => import('@components/Instructors/Instructors'));
const CommentsSlider = lazy(() => import('@components/CommentsSlider/CommentsSlider'));
const BecomeInstructor = lazy(() => import('@components/Home/BecomeInstructor/BecomeInstructor'));
const CheckoutCourses = lazy(() => import('@components/Home/BecomeInstructor/CheckoutCourses'));
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

export default Home;
