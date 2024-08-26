import { NavLink, Outlet } from "react-router-dom";


import ProfileTabs from "./ProfileTabs";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Container from "@components/ui/Container";


const ProfileLayout = () => {



    return (
        <>

            <Header />
            <Container styles="pt-10">

                <div className="flex  tb:justify-between gap-4 ">

                    <ProfileTabs />



                    <div className="flex tb:basis-[74%]">
                        <Outlet />
                    </div>
                </div>

            </Container>
            <Footer />
        </>
    )
}

export default ProfileLayout;