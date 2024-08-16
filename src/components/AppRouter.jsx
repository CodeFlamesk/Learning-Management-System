import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '@/pages/SignUp';
import Home from '@/pages/Home';
import LogIn from '@/pages/LogIn';
import Layout from './Layout';
import Categories from '@/pages/Categories';
import CoursePage from '@/pages/СoursePage';
import Description from './CoursesPageCard/Description';
import LayoutCourse from './CoursesPageCard/LayoutCourse';
import Instructor from './CoursesPageCard/Instructor';
import Syllabus from './CoursesPageCard/Syllabus';
import Reviews from './CoursesPageCard/Reviews';
import ShoppingCart from '@/pages/paymentShoppingCart/ShoppingCart';

import Checkout from '@pages/paymentShoppingCart/Checkout';


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