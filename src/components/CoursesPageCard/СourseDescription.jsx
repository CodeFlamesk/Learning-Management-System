import Rating from "@/components/Courses/Rating";
import Star from "@/components/Courses/icon/Star";
import NavArrow from "@/components/ui/icons/NavArrow";
import { Link } from "react-router-dom";
import Author from "./img/author.webp";
import Globe from "./icon/Globe";
import SmallText from "@/components/ui/SmallText";
import Paragraph from "@/components/ui/Paragraph";
import SmoothStar from "./icon/SmoothStar";
import PromotionImg from "./img/promotion.webp"
import Subheading from "@/components/ui/Subheading";
import Subtitle from "@/components/ui/Subtitle";

import { LinkSocial } from "@/components/Footer/Footer";
const CourseDescription = () => {
    return (
        <>
            <div className="flex gap-2 items-center pt-10 ">
                <Link to="/" href="#" >
                    <SmallText title="Home" />

                </Link>
                <NavArrow />
                <Link to="/categories" href="#" className="brand-name"><SmallText title="Categories" /></Link>
                <NavArrow />
                <SmallText title="Introduction to User Experience&nbsp;Design" styles="text-primary-500" />
            </div>
            <div className="relative flex flex-col-reverse lg:flex-row reverse  items-center">
                <div className="flex flex-col  lg:basis-[65%] xl:basis-[65%]">

                    <div className="flex flex-col pt-10 gap-4">
                        <p className="text-grey-900 text-2xl font-bold	sm:leading-56 sm:text-40 ">Introduction to User Experience Design</p>

                        <Paragraph>
                            This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.
                        </Paragraph>
                        <div className="flex pt-2  fnin:items-center gap-3  flex-col fnin:flex-row">
                            <div className="flex items-center  gap-1">
                                <p className="text-base font-medium text-yellow ">4.6</p>
                                <Rating iconComponent={<SmoothStar width="15.6" height="15" />} />

                                <SmallText title="(651651 rating)" />
                            </div>
                            <div className="flex  gap-3 ">
                                <SmallText title="|" styles="hidden fnin:block" />
                                <SmallText title="22 Total Hours. 155 Lectures. All levels" />
                            </div>



                        </div>

                        <div className="flex items-center gap-2">
                            {/*  <Author /> */}

                            <img src={Author} alt="Author" className="w-10 h-10 rounded-full" />
                            <SmallText title="Created by" />
                            <a href="#"><SmallText title="Ronal Richards" styles="text-primary-600" /></a>

                        </div>
                    </div>

                    <div className="flex pt-6 items-center gap-3 pb-7">
                        <Globe />
                        <SmallText title="English, Spanish, Italian, German" />

                    </div>
                </div>

                <Link to="details/shoppingcart" className="flex max-w-full  flex-col lg:w-1/3 lg:top-6 lg:right-0 lg:absolute mt-10 lg:mt-0 py-4 md:pt-6 md:pb-7 bg-white border border-grey-border rounded-2xl justify-center items-center">
                    <div className="flex flex-col md:flex-row  lg:flex-col px-4 md:px-22 gap-6 lg:gap-0 items-center lg:items-start w-full">
                        <img src={PromotionImg} alt="promotion" className="rounded-lg w-full" />
                        <div className="flex flex-col  w-full">
                            <div className="flex gap-17w justify-center lg:pt-8 items-center w-full" >
                                <Subheading title="$49.5" styles="text-2xl " />
                                <Subtitle title="99.5" styles="leading-7 line-through text-grey-disableColor " />

                                <p className="text-xl leading-7 font-semibold text-green-600">50% Off</p>
                            </div>
                            <button className="p-2.5  rounded-lg font-medium  box-border text-sm border items-center border-text-dark   text-white  bg-text-dark hover:text-grey-900 hover:bg-sl-blue  transition-all duration-500   mt-6">Add To Cart</button>
                            <button className="p-2.5 rounded-lg font-medium  box-border text-sm border items-center border-text-dark    text-grey-900 hover:bg-sl-blue  hover:text-white transition-all duration-500   mt-4 lg:mb-10">Buy Now</button>

                        </div>
                    </div>
                    <div className="flex flex-col  lg:border-t border-grey-border w-full px-4 md:px-22 items-center lg:items-baseline">
                        <p className="paragraph-medium text-grey-800 pt-6 ">Share</p>
                        <LinkSocial styleAll="pt-2 gap-4 xl:gap-5 justify-evenly" styleIcon="promotion-social" />
                    </div>
                </Link>

            </div >

        </>


    )
}
export default CourseDescription;