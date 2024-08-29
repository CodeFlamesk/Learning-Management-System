import { NavLink, Outlet } from "react-router-dom";


import ProfileTabs from "./ProfileTabs";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Container from "@components/ui/Container";


const ProfileLayout = () => {



    return (
        <>

            <Header />
            <Container styles="pt-6 tb:pt-10 mb-auto">

                <div className="flex flex-col tb:flex-row tb:justify-between gapx-4 relative ">

                    <ProfileTabs />



                    <div className="flex tb:basis-[74%]  overflow-hidden ">
                        <Outlet />
                    </div>
                </div>

            </Container>
            <Footer />
        </>
    )
}

export default ProfileLayout;