import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';

import Layout from './Layout';

const CoursePage = lazy(() => import('@/pages/СoursePage'));
const Description = lazy(() => import('./CoursesPageCard/Description'));
import LayoutCourse from './CoursesPageCard/LayoutCourse';
const Instructor = lazy(() => import('./CoursesPageCard/Instructor'));
const Syllabus = lazy(() => import('./CoursesPageCard/Syllabus'));
const Reviews = lazy(() => import('./CoursesPageCard/Reviews'));
const ShoppingCart = lazy(() => import('@/pages/paymentShoppingCart/ShoppingCart'));
const Checkout = lazy(() => import('@pages/paymentShoppingCart/Checkout'));

const MentorPage = lazy(() => import('@pages/MentorPage'));
import ProfileLayout from './ProfilePage/ProfileLayot';
const Profile = lazy(() => import('./ProfilePage/Profile'));
const Teachers = lazy(() => import('./ProfilePage/Teachers'));
const Message = lazy(() => import('./ProfilePage/Message'));
const MyReviews = lazy(() => import('./ProfilePage/MyReviews'));
const MyCourses = lazy(() => import('./ProfilePage/MyCourses'));
const DescriptionBoughtCourse = lazy(() => import('@pages/MyBoughtCourse/DetailsBoughtCourse'));
import LayoutBoughtCourse from '@pages/MyBoughtCourse/LayoutBoughtCourse';
import SignUp from '@pages/SignUp';
import { LogIn } from 'lucide-react';
import Categories from '@pages/Categories';
import OrderComplate from '@pages/paymentShoppingCart/OrderComplete';
const InstructorBoughtCourse = lazy(() => import('@pages/MyBoughtCourse/InstructorBoughtCourse'));
const ReviewsBoughtCourse = lazy(() => import('@pages/MyBoughtCourse/ReviewsBoughtCourse'));
const CoursesBoughtCourse = lazy(() => import('@pages/MyBoughtCourse/CoursesBoughtCourse'));
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<LogIn />} />
                <Route path="categories" element={<Categories />} />
                <Route path="categories/:id" element={<CoursePage />} />
                <Route path="categories/:id/details/shoppingcart" element={<ShoppingCart />} />
                <Route path="categories/:id/details/shoppingcart/checkout" element={<Checkout />} />
                <Route path="categories/details/shoppingcart/checkout/complate" element={<OrderComplate />} />

                <Route path="categories/mentorpage" element={<MentorPage />} />


            </Route>
            <Route path="/bought-course/:index" element={<LayoutBoughtCourse />}>
                {<Route path="description" element={<DescriptionBoughtCourse />} />}
                {<Route path="instructors" element={<InstructorBoughtCourse />} />}
                {<Route path="courses" element={<CoursesBoughtCourse />} />}
                {<Route path="reviews" element={<ReviewsBoughtCourse />} />}
            </Route>

            <Route path="myprofile" element={<ProfileLayout />}>
                <Route path="profile" element={<Profile />} />
                <Route path="my-courses" element={<MyCourses />} />
                <Route path="teachers" element={<Teachers />} />
                <Route path="message" element={<Message />} />
                <Route path="my-reviews" element={<MyReviews />} />
            </Route>

            <Route path="categories/:id" element={<LayoutCourse />}>

                <Route path="details/description" element={<Description />} />
                <Route path="details/instructor" element={<Instructor />} />
                <Route path="details/syllabus" element={<Syllabus />} />
                <Route path="details/reviews" element={<Reviews />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;