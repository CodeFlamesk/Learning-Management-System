import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Suspense } from "react";

const Layout = () => {



    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </div>
    )
}

export default Layout