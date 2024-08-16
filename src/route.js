import SignUp from "@/pages/SignUp";
import Home from "@/pages/Home/Home";
import LogIn from "@/pages/LogIn";
import { HOME, SIGNUP } from "@/utils/consts";
import { CATEGORIES } from "utils/consts";
import Categories from "components/Home/categories/Categories";
import Description from "components/CoursesPageCard/Description";
import Instructor from "components/CoursesPageCard/Instructor";
import Syllabus from "components/CoursesPageCard/Syllabus";
import Reviews from "components/CoursesPageCard/Reviews";
import ShoppingCart from "pages/ShoppingCart";


export const publicRoutes = [
    {
        path: HOME,
        Component: Home,
        name: "Home"
    },
    {
        path: SIGNUP,
        Component: SignUp,
        name: "SignUp"
    },
    {
        path: LOGIN,
        Component: LogIn,
        name: "LogIn"
    },
    {
        path: CATEGORIES,
        Component: Categories,
        name: "Categories"
    },
    {
        path: DESCRIPTION,
        Component: Description,
        name: "Description"
    },
    {
        path: INSTRUCTOR,
        Component: Instructor,
        name: "Instructor"
    },
    {
        path: SYLLABUS,
        Component: Syllabus,
        name: "Syllabus"
    },
    {
        path: REVIEWS,
        Component: Reviews,
        name: "Reviews"
    },
    {
        path: SHOPPINGCART,
        Component: ShoppingCart,
        name: "ShoppingCart"
    },
]