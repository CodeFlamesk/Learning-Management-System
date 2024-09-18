import { Link, Outlet, useParams } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/ui/Container";

import TabsBoughtCourse from "./TabsBoughtCourse";
import SubheadingN from "@components/ui/SubheadingN";
import CheckBoxBuy from "@components/ui/CheckBoxBuy";

import logoHeader from '@components/Footer/img/logo-footer.webp';
import SmoothStar from '@/components/CoursesPageCard/icon/SmoothStar';

import YouTubeVideo from "@components/ui/YouTubeVideo";
import VideoRecorder from "@components/ui/icons/VideoRecorder";
import {
    Accordion,
    AccordionItem,
    AccordionTriggerArrowLeft,
    AccordionContentN,
} from "@/components/ui/AccordionMain"
const LayoutBoughtCourse = () => {
    const { index } = useParams()


    return (
        <div className={`w-full  flex flex-col  `}>

            <div className=' gap-1 sm:gap-4 bg-grey-900  py-3 '>
                <div className='z-50 flex  items-center sm:justify-between px-5 sm:px-8 max-w-screen-ct mx-auto flex-shrink-0'>
                    <Link to="/"><img src={logoHeader} alt="logo" /></Link>
                    <div className="flex gap-2 items-center">
                        <SmoothStar color="#E2E8F0" />
                        <p className="text-white font-medium text-sm ">Provide Rating</p>
                    </div>

                </div>
            </div>


            <Container styles="pb-6" >
                <p className="mt-6 text-grey-900 text-2xl font-semibold ">Introduction to User Experience Design</p>
                <div className="flex flex-col-reverse lg:flex-row  pt-6 justify-between  relative gap-10 flex-shrink-0">

                    <div className=" flex flex-col flex-shrink-0 basis-[65%] relative ">
                        <YouTubeVideo />
                        <TabsBoughtCourse />
                        <main >
                            <Outlet />
                        </main>
                    </div>

                    <div className="flex flex-col basis-[31.25%]   flex-shrink-0">
                        <div className="flex flex-col bg-sl-main pt-5  rounded-2xl overflow-hidden border border-grey-border">
                            <p className=" text-grey-900 text-2xl font-semibold px-4">Course Completion </p>
                            <Accordion type="single" collapsible className="border-b  bg-sl-main border-grey-300" >
                                <AccordionItem value="item-1">
                                    <AccordionTriggerArrowLeft>

                                        <SubheadingN title="Introduction to UX Design" styles="text-start" />



                                    </AccordionTriggerArrowLeft>
                                    <AccordionContentN styles='px-0   ' >
                                        <div className="px-3 bg-sl-main hover:bg-grey-900 hover:text-white duration-300 transition-all group">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>1.</p>
                                                        <p>What is User Experience (UX) Design? </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>

                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">

                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>2.</p>
                                                        <p>Historical Overview of UX Design Overview of UX Design </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>3.</p>
                                                        <p> Understanding User-Centered Design </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>4.</p>
                                                        <p> The Role of UX Design in Digital Products </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>5.</p>
                                                        <p> Introduction to UX Design Tools and Techniques </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>

                                        </div>
                                    </AccordionContentN>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="border-b  bg-sl-main border-grey-300" >
                                <AccordionItem value="item-1">
                                    <AccordionTriggerArrowLeft>

                                        <SubheadingN styles="text-start" title="Basics of User-Centered Design" />



                                    </AccordionTriggerArrowLeft>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group ' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>1.</p>
                                                        <p>What is User Experience (UX) Design? </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>

                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">

                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>2.</p>
                                                        <p>Historical Overview of UX Design Overview of UX Design </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>3.</p>
                                                        <p> Understanding User-Centered Design </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>4.</p>
                                                        <p> The Role of UX Design in Digital Products </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>5.</p>
                                                        <p> Introduction to UX Design Tools and Techniques </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>

                                        </div>
                                    </AccordionContentN>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="border-b  bg-sl-main border-grey-300" >
                                <AccordionItem value="item-1">
                                    <AccordionTriggerArrowLeft>

                                        <SubheadingN styles="text-start" title="Elements of User Experience" />



                                    </AccordionTriggerArrowLeft>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group ' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>1.</p>
                                                        <p>What is User Experience (UX) Design? </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>

                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">

                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>2.</p>
                                                        <p>Historical Overview of UX Design Overview of UX Design </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>3.</p>
                                                        <p> Understanding User-Centered Design </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>4.</p>
                                                        <p> The Role of UX Design in Digital Products </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>5.</p>
                                                        <p> Introduction to UX Design Tools and Techniques </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>

                                        </div>
                                    </AccordionContentN>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="  bg-sl-main " >
                                <AccordionItem value="item-1">
                                    <AccordionTriggerArrowLeft>

                                        <SubheadingN styles="text-start" title="Visual Design Principles" />



                                    </AccordionTriggerArrowLeft>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group ' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>1.</p>
                                                        <p>What is User Experience (UX) Design? </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>

                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">

                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>2.</p>
                                                        <p>Historical Overview of UX Design Overview of UX Design </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>3.</p>
                                                        <p> Understanding User-Centered Design </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>4.</p>
                                                        <p> The Role of UX Design in Digital Products </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>
                                        </div>
                                    </AccordionContentN>
                                    <AccordionContentN styles='px-0  bg-sl-main hover:bg-grey-900 hover:text-white duration-300 group' >
                                        <div className="px-3">
                                            <CheckBoxBuy  >
                                                <div className="flex w-full justify-between gap-7   group-hover:text-white ">
                                                    <div className="flex gap-2">
                                                        <p>5.</p>
                                                        <p> Introduction to UX Design Tools and Techniques </p>
                                                    </div>

                                                    <div className="flex gap-1.5 justify-between ">
                                                        <VideoRecorder /> <p сlassName="pl-2">4min</p>
                                                    </div>
                                                </div>

                                            </CheckBoxBuy>

                                        </div>
                                    </AccordionContentN>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Container>



            <Footer />
        </div>
    );
};

export default LayoutBoughtCourse;