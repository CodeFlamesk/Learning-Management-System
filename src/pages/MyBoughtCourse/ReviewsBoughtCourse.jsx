import Subheading from "@/components/ui/Subheading";
import Paragraph from "@/components/ui/Paragraph";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTriggerArrowLeft,
} from "@/components/ui/AccordionMain";
import Star from "@/components/Home/categories/icon/Star";
import RatingStar from "@/components/ui/RatingStar";
import ReviewAuthor from "@components/CoursesPageCard/img/ReviewsAuthot.webp";
import SmoothStar from "@components/CoursesPageCard/icon/SmoothStar";
import SmallText from "@/components/ui/SmallText";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const ReviewsBoughtCourse = ({ styles, style }) => {
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("View more Reviews");

    return (
        <div className="flex pt-6 pb-6">
            <div className={`w-full border-t pb-6 border-grey-border relative ${styles}`}>
                <Subheading styles="pt-6" title="Learner Reviews" />
                <Accordion type="single" collapsible className="flex border border-grey-border max-w-56 rounded-lg mt-4 absolute">
                    <AccordionItem value="item-1">
                        <AccordionTriggerArrowLeft>
                            <div className="flex items-center">
                                <Star width="20" height="20" />
                                <p className="pl-1 pr-2 text-xl font-semibold text-grey-900">4.6</p>
                                <p className="font-medium text-sm text-grey-700">146,951 reviews</p>
                            </div>
                        </AccordionTriggerArrowLeft>
                        <AccordionContent>
                            <RatingStar />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="flex flex-col gap-4 pt-92w">



                    <div className="flex flex-col ff:flex-row gap-4 mde:gap-8 p-6 border border-grey-border rounded-2xl sm:justify-between items-center">
                        <div className={`flex flex-row ff:flex-col mde:flex-row gap-3 justify-center items-center w-full ${style}`}>
                            <img src={ReviewAuthor} alt="Author" className="w-[60px] h-[60px] rounded-full" />
                            <p className=" text-lg font-semibold text-grey-900 w-24 ff:flex-wrap ">Mark Doe</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <SmoothStar />
                                <p className="text-lg font-semibold text-grey-900 pl-1">5</p>
                                <SmallText title="Reviewed on 22nd March, 2024" styles="ml-auto" />
                            </div>
                            <Paragraph styles="text-base">
                                I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.
                            </Paragraph>
                        </div>
                    </div>
                    <div className="flex flex-col ff:flex-row gap-4 mde:gap-8 p-6 border border-grey-border rounded-2xl sm:justify-between items-center">
                        <div className={`flex flex-row ff:flex-col mde:flex-row gap-3 justify-center items-center w-full ${style}`}>
                            <img src={ReviewAuthor} alt="Author" className="w-[60px] h-[60px] rounded-full" />
                            <p className=" text-lg font-semibold text-grey-900 w-24 ff:flex-wrap ">Mark Doe</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <SmoothStar />
                                <p className="text-lg font-semibold text-grey-900 pl-1">5</p>
                                <SmallText title="Reviewed on 22nd March, 2024" styles="ml-auto" />
                            </div>
                            <Paragraph styles="text-base">
                                I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.
                            </Paragraph>
                        </div>
                    </div>
                    <div className="flex flex-col ff:flex-row gap-4 mde:gap-8 p-6 border border-grey-border rounded-2xl sm:justify-between items-center">
                        <div className={`flex flex-row ff:flex-col mde:flex-row gap-3 justify-center items-center w-full ${style}`}>
                            <img src={ReviewAuthor} alt="Author" className="w-[60px] h-[60px] rounded-full" />
                            <p className=" text-lg font-semibold text-grey-900 w-24 ff:flex-wrap ">Mark Doe</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <SmoothStar />
                                <p className="text-lg font-semibold text-grey-900 pl-1">5</p>
                                <SmallText title="Reviewed on 22nd March, 2024" styles="ml-auto" />
                            </div>
                            <Paragraph styles="text-base">
                                I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.
                            </Paragraph>
                        </div>
                    </div>
                    <CSSTransition
                        in={show}
                        timeout={300}
                        classNames="alert"
                        unmountOnExit
                        onExited={() => setButtonText("View more Reviews")}
                    >
                        <div className="flex flex-col ff:flex-row gap-4 mde:gap-8 p-6 border border-grey-border rounded-2xl sm:justify-between items-center">
                            <div className={`flex flex-row ff:flex-col mde:flex-row gap-3 justify-center items-center w-full ${style}`}>
                                <img src={ReviewAuthor} alt="Author" className="w-[60px] h-[60px] rounded-full" />
                                <p className=" text-lg font-semibold text-grey-900 w-24 ff:flex-wrap">Mark Doe</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <SmoothStar />
                                    <p className="text-lg font-semibold text-grey-900 pl-1">5</p>
                                    <SmallText title="Reviewed on 22nd March, 2024" styles="ml-auto" />
                                </div>
                                <Paragraph styles="text-base">
                                    I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.
                                </Paragraph>
                            </div>
                        </div>

                    </CSSTransition>
                    <CSSTransition in={show} timeout={300} classNames="alert" unmountOnExit onExited={() => setButtonText("View more Reviews")}
                    >
                        <div className="flex flex-col ff:flex-row gap-4 mde:gap-8 p-6 border border-grey-border rounded-2xl sm:justify-between items-center">
                            <div className={`flex flex-row ff:flex-col mde:flex-row gap-3 justify-center items-center w-full ${style}`}>
                                <img src={ReviewAuthor} alt="Author" className="w-[60px] h-[60px] rounded-full" />
                                <p className=" text-lg font-semibold text-grey-900 w-24 ff:flex-wrap ">Mark Doe</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <SmoothStar />
                                    <p className="text-lg font-semibold text-grey-900 pl-1">5</p>
                                    <SmallText title="Reviewed on 22nd March, 2024" styles="ml-auto" />
                                </div>
                                <Paragraph styles="text-base">
                                    I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.
                                </Paragraph>
                            </div>
                        </div>

                    </CSSTransition>
                    <CSSTransition
                        in={show}
                        timeout={300}
                        classNames="alert"
                        unmountOnExit
                        onExited={() => setButtonText("View more Reviews")}
                    >
                        <div className="flex flex-col ff:flex-row gap-4 mde:gap-8 p-6 border border-grey-border rounded-2xl sm:justify-between items-center">
                            <div className={`flex flex-row ff:flex-col mde:flex-row gap-3 justify-center items-center w-full ${style}`}>
                                <img src={ReviewAuthor} alt="Author" className="w-[60px] h-[60px] rounded-full" />
                                <p className=" text-lg font-semibold text-grey-900 w-24 ff:flex-wrap ">Mark Doe</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <SmoothStar />
                                    <p className="text-lg font-semibold text-grey-900 pl-1">5</p>
                                    <SmallText title="Reviewed on 22nd March, 2024" styles="ml-auto" />
                                </div>
                                <Paragraph styles="text-base">
                                    I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.
                                </Paragraph>
                            </div>
                        </div>

                    </CSSTransition>
                </div>

                <button
                    onClick={() => {
                        setShow(!show);
                        if (!show) {
                            setButtonText("Hide Reviews");
                        }
                    }}
                    className="px-6 py-3 rounded-lg font-medium box-border text-sm border items-center border-text-dark text-grey-900 hover:bg-sl-blue hover:text-white transition-all duration-500 mt-4 lg:mb-10"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default ReviewsBoughtCourse;
