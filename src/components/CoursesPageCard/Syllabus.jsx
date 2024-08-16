import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    AccordionTriggerArrowLeft,
} from "@/components/ui/AccordionMain"
import Subheading from "@/components/ui/Subheading";
import SmallText from "@/components/ui/SmallText";
const Syllabus = () => {
    return (
        <div className="flex pt-6 pb-6">
            <div className="w-full lg:basis-[65%] border-t   border-grey-border">
                <Subheading styles="pt-6" title="Syllabus" />
                <div className="border border-grey-300 rounded-lg mt-3">

                    <Accordion type="single" collapsible className="border-b border-grey-300" >
                        <AccordionItem value="item-1">
                            <AccordionTriggerArrowLeft>
                                <div className="flex flex-col fs:flex-row fs:justify-between w-full items-center">
                                    <p>   Basics of User-Centered Design</p>
                                    <div className="flex gap-4 items-center">
                                        <SmallText title="5 Lessons" styles="text-sm" />
                                        <SmallText title="1 hour" styles="text-sm" />

                                    </div>
                                </div>


                            </AccordionTriggerArrowLeft>
                            <AccordionContent  >
                                c
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                    <Accordion type="single" collapsible className="border-b border-grey-300" >
                        <AccordionItem value="item-1">
                            <AccordionTriggerArrowLeft>
                                <div className="flex flex-col fs:flex-row fs:justify-between w-full items-center">
                                    <p>   Introduction to UX Design</p>
                                    <div className="flex gap-4 items-center">
                                        <SmallText title="5 Lessons" styles="text-sm" />
                                        <SmallText title="1 hour" styles="text-sm" />

                                    </div>
                                </div>


                            </AccordionTriggerArrowLeft>
                            <AccordionContent  >
                                c
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="border-b border-grey-300" >
                        <AccordionItem value="item-1">
                            <AccordionTriggerArrowLeft>
                                <div className="flex flex-col fs:flex-row fs:justify-between w-full items-center">
                                    <p>   Introduction to UX Design</p>
                                    <div className="flex gap-4 items-center">
                                        <SmallText title="5 Lessons" styles="text-sm" />
                                        <SmallText title="1 hour" styles="text-sm" />

                                    </div>
                                </div>


                            </AccordionTriggerArrowLeft>
                            <AccordionContent  >
                                c
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible >
                        <AccordionItem value="item-1">
                            <AccordionTriggerArrowLeft>
                                <div className="flex flex-col fs:flex-row fs:justify-between w-full items-center">
                                    <p>   Introduction to UX Design</p>
                                    <div className="flex gap-4 items-center">
                                        <SmallText title="5 Lessons" styles="text-sm" />
                                        <SmallText title="1 hour" styles="text-sm" />

                                    </div>
                                </div>


                            </AccordionTriggerArrowLeft>
                            <AccordionContent  >
                                c
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>



            </div>

        </div>
    )
}
export default Syllabus;