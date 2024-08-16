import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer/Footer";

import Container from "@/components/ui/Container";
import CommentsSlider from "@/components/CommentsSlider/CommentsSlider";
import CoursesCard from "@/components/Courses/CoursesCard";

const LayoutShopping = () => {



    return (
        <div className={`w-full  flex flex-col  `}>
            <Header />

            <div className="w-full mx-auto  bg-sl-main">


            </div>
            <div className="w-full mx-auto ">
                <Container>


                    <main >
                        <Outlet />
                    </main>
                </Container>

            </div>
            <div >
                <Footer />
            </div>

        </div>
    );
};

export default LayoutShopping;