
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import image1 from "./img/1.webp"
import image2 from "./img/2.webp"
import image3 from "./img/3.webp"
import image4 from "./img/4.webp"
import MainSlide from './MainSlide';



const data = [
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title: "Unlock Your Potential with Byway",
        image: image1,
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. ",
        title: "Unlock Your Potential with Byway",
        image: image2,
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title: "Unlock Your Potential with Byway",
        image: image3,
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title: "Unlock Your Potential with Byway",
        image: image4,
        buttonText: "Start your instructor journey"
    }
]

const MainSlider = () => {
    return (
        <Swiper
            loop={true}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
        >
            {
                data.map((item, i) => {
                    return (
                        <SwiperSlide key={i} >
                            <MainSlide {...item} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default MainSlider