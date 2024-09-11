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
import OrderComplate from "@pages/paymentShoppingCart/OrderComplete";
import Profile from "@components/ProfilePage/Profile";
import MyCourses from "@components/ProfilePage/MyCourses";
import Teachers from "@components/ProfilePage/Teachers";
import Message from "@components/ProfilePage/Message";
import MyReviews from "@components/ProfilePage/MyReviews";


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
    {
        path: ORDERCOMPLATE,
        Component: OrderComplate,
        name: "OrderComplate"
    },
    {
        path: PROFILEPAGE,
        Component: ProfilePage,
        name: "ProfilePage"
    },
    {
        path: MENTORPAGE,
        Component: MentorPage,
        name: "MentorPage"
    },
    {
        path: PROFILE,
        Component: Profile,
        name: "Profile"
    },
    {
        path: MYCOURSES,
        Component: MyCourses,
        name: "MyCourses"
    },
    {
        path: TEACHERS,
        Component: Teachers,
        name: "Teachers"
    },
    {
        path: MESSAGE,
        Component: Message,
        name: "Message"
    },
    {
        path: MYREVIEWS,
        Component: MyReviews,
        name: "MyReviews"
    },
    {
        path: MYBOUGHTCOURSE,
        Component: MyBoughtCourse,
        name: "MyBoughtCourse"
    },


]