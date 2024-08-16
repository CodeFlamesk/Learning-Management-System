import Star from "@/components/Courses/icon/Star";
import StarEmpty from "./icons/StarEmpty";
import CheckBoxRating from "./CheckBoxRating";

import { useState } from "react"
import CheckBoxRatingStar from "./CheckBoxRatingStar";

const RatingStar = () => {
    const [starFirstChecked, setStarFirstChecked] = useState(false);
    const [starSecondChecked, setStarSecondChecked] = useState(false);
    const [starThirdChecked, setStarThirdChecked] = useState(false);
    const [starFourChecked, setStarFourChecked] = useState(false);
    const [starFiveChecked, setStarFiveChecked] = useState(false);

    return (
        <div className="flex flex-col gap-1 pl-7">

            <CheckBoxRatingStar isChecked={starFirstChecked} onChange={setStarFirstChecked} id="st" className="h-4 z-20">
                <div className="flex gap-2 ">
                    {[...Array(5)].map((_, index) => (
                        <div key={index}>
                            {index < 5 ? <Star /> : <StarEmpty />}
                        </div>
                    ))}
                    <p className="text-sm text-grey-700 font-normal ">80%</p>
                </div>


            </CheckBoxRatingStar>





            <CheckBoxRatingStar isChecked={starSecondChecked} onChange={setStarSecondChecked} id="st23">
                <div className="flex gap-2">
                    {[...Array(5)].map((_, index) => (
                        <div key={index}>
                            {index < 4 ? <Star /> : <StarEmpty />}
                        </div>
                    ))}
                    <p className="text-sm text-grey-700 font-normal ">10%</p>
                </div>
            </CheckBoxRatingStar>


            <CheckBoxRatingStar isChecked={starThirdChecked} onChange={setStarThirdChecked} id="st3">

                <div className="flex gap-2">
                    {[...Array(5)].map((_, index) => (
                        <div key={index}>
                            {index < 3 ? <Star /> : <StarEmpty />}
                        </div>
                    ))}
                    <p className="text-sm text-grey-700 font-normal ">5%</p>
                </div>

            </CheckBoxRatingStar>


            <CheckBoxRatingStar isChecked={starFourChecked} onChange={setStarFourChecked} id="st4">

                <div className="flex gap-2">
                    {[...Array(5)].map((_, index) => (
                        <div key={index}>
                            {index < 2 ? < Star /> : <StarEmpty />}
                        </div>
                    ))}
                    <p className="text-sm text-grey-700 font-normal ">3%</p>
                </div>
            </CheckBoxRatingStar>


            <CheckBoxRatingStar isChecked={starFiveChecked} onChange={setStarFiveChecked} id="st5">

                <div className="flex gap-2">
                    {[...Array(5)].map((_, index) => (
                        <div key={index}>
                            {index < 1 ? <Star /> : <StarEmpty />}
                        </div>
                    ))}
                    <p className="text-sm text-grey-700 font-normal ">2%</p>
                </div>

            </CheckBoxRatingStar>

        </div>


    );
};
export default RatingStar;