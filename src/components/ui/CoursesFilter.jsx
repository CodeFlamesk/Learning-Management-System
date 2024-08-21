import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/AccordionMain"
import CheckBox from "./CheckBox"
import { useState } from "react"
import StarEmpty from "./icons/StarEmpty"
import Star from "@/components/Courses/icon/Star.jsx"
import CheckBoxRating from "./CheckBoxRating"
import StarFilter from "./StarFilter"
const CoursesFilter = () => {
    const [numberFirstChecked, setNumberFirstChecked] = useState(false);
    const [numberSecondChecked, setNumberSecondChecked] = useState(false);
    const [numberThirdChecked, setNumberThirdChecked] = useState(false);
    const [numberFourChecked, setNumberFourChecked] = useState(false);


    const [priceFirstChecked, setPriceFirstChecked] = useState(false);
    const [priceSecondChecked, setPriceSecondChecked] = useState(false);
    const [priceThirdChecked, setPriceThirdChecked] = useState(false);
    const [priceFourChecked, setPriceFourChecked] = useState(false);
    const [priceFiveChecked, setPriceFiveChecked] = useState(false);

    return (
        <div className="w-full">
            <Accordion type="single" collapsible className="border-b border-grey-300">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Rating</AccordionTrigger>
                    <StarFilter />
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="border-b border-grey-300" >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Number of Chapters</AccordionTrigger>
                    <AccordionContent >

                        <CheckBox isChecked={numberFirstChecked} onChange={setNumberFirstChecked} id="ch1">
                            1-10
                        </CheckBox>
                        <CheckBox isChecked={numberSecondChecked} onChange={setNumberSecondChecked} id="ch2">
                            10-15
                        </CheckBox>
                        <CheckBox isChecked={numberThirdChecked} onChange={setNumberThirdChecked} id="ch3">
                            15-20
                        </CheckBox>
                        <CheckBox isChecked={numberFourChecked} onChange={setNumberFourChecked} id="ch4">
                            20-25
                        </CheckBox>



                    </AccordionContent>
                </AccordionItem>
            </Accordion >
            <Accordion type="single" collapsible className="border-b border-grey-300">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                        <CheckBox isChecked={priceFirstChecked} onChange={setPriceFirstChecked} id="pr1">
                            $0-50
                        </CheckBox>
                        <CheckBox isChecked={priceSecondChecked} onChange={setPriceSecondChecked} id="pr2">
                            $51-100
                        </CheckBox>
                        <CheckBox isChecked={priceThirdChecked} onChange={setPriceThirdChecked} id="pr3">
                            $101-150
                        </CheckBox>
                        <CheckBox isChecked={priceFourChecked} onChange={setPriceFourChecked} id="pr4">
                            $151-200
                        </CheckBox>
                        <CheckBox isChecked={priceFiveChecked} onChange={setPriceFiveChecked} id="pr5">
                            more than $200
                        </CheckBox>
                    </AccordionContent>
                </AccordionItem>
            </Accordion >
            <Accordion type="single" collapsible className="border-b border-grey-300">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
export default CoursesFilter