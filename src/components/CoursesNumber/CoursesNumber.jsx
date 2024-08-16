import HeadingS from "@/components/ui/HeadingS";
import SmallText from "@/components/ui/SmallText";
const CoursesNumber = () => {
    return (

        <div className="grid grid-cols-2 gap-6 gap-x-0  md:grid-cols-4 md:gap-0 bg-sl-main py-10 max-w-screen-ct mx-auto px-5 sm:px-8 ">
            <div className="box-border flex items-center justify-center flex-col text-center  border-r-4 border-grey-border  px-4  border-solid max-w-full  ">
                <HeadingS title={"250 +"} />
                <SmallText title={"Courses by our best mentors"} />
            </div>
            <div className="box-border flex items-center justify-center flex-col text-center  md:border-r-4 md:border-grey-border px-4 border-solid max-w-full ">
                <HeadingS title={"1000 +"} />
                <SmallText title={"Courses by our best mentors"} />
            </div>
            <div className="box-border flex items-center justify-center flex-col text-center  border-r-4 border-grey-border px-4 border-solid max-w-full ">
                <HeadingS title={"15 +"} />
                <SmallText title={"Courses by our best mentors"} />
            </div>
            <div className="flex items-center justify-center flex-col text-center   px-4 max-w-full ">
                <HeadingS title={"2400 +"} />
                <SmallText title={"Courses by our best mentors"} />
            </div>
        </div>


    )
}


export default CoursesNumber;