import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/AccordionMain"

import { useState } from "react"
import StarEmpty from "./icons/StarEmpty"
import Star from "@/components/Courses/icon/Star.jsx"
import CheckBoxRating from "./CheckBoxRating"
const StarFilter = () => {

    const [starFirstChecked, setStarFirstChecked] = useState(false);
    const [starSecondChecked, setStarSecondChecked] = useState(false);
    const [starThirdChecked, setStarThirdChecked] = useState(false);
    const [starFourChecked, setStarFourChecked] = useState(false);
    const [starFiveChecked, setStarFiveChecked] = useState(false);



    return (
        <AccordionContent >
            <CheckBoxRating isChecked={starFirstChecked} onChange={setStarFirstChecked} id="st1">

                {[...Array(5)].map((_, index) => (
                    <div key={index}>
                        {index < 5 ? <Star /> : <StarEmpty />}
                    </div>
                ))}

            </CheckBoxRating>
            <CheckBoxRating isChecked={starSecondChecked} onChange={setStarSecondChecked} id="st2">

                {[...Array(5)].map((_, index) => (
                    <div key={index}>
                        {index < 4 ? <Star /> : <StarEmpty />}
                    </div>
                ))}

            </CheckBoxRating>
            <CheckBoxRating isChecked={starThirdChecked} onChange={setStarThirdChecked} id="st3">

                {[...Array(5)].map((_, index) => (
                    <div key={index}>
                        {index < 3 ? <Star /> : <StarEmpty />}
                    </div>
                ))}

            </CheckBoxRating>
            <CheckBoxRating isChecked={starFourChecked} onChange={setStarFourChecked} id="st4">

                {[...Array(5)].map((_, index) => (
                    <div key={index}>
                        {index < 2 ? <Star /> : <StarEmpty />}
                    </div>
                ))}

            </CheckBoxRating>
            <CheckBoxRating isChecked={starFiveChecked} onChange={setStarFiveChecked} id="st5">

                {[...Array(5)].map((_, index) => (
                    <div key={index}>
                        {index < 1 ? <Star /> : <StarEmpty />}
                    </div>
                ))}

            </CheckBoxRating>

        </AccordionContent>
    )
}
export default StarFilter;