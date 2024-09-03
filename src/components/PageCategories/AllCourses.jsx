import MainTitle from "@/components/ui/MainTitle"
import ButtonFilter from "@/components/ui/buttons/ButtonFilter"
import FilterIcon from '@/components/PageCategories/icon/Filter'
import SelectMenu from "./SelectMenu"

import CoursesFilter from "@/components/ui/CoursesFilter";

import PagePagination from "./PagePagination";


const AllCourses = () => {
    return (
        <div className="flex flex-col">

            <MainTitle title="Design Courses" styles="pt-6" />
            <h3 className="pt-6 text-2xl  text-grey-900   font-semibold">All Development Courses</h3>
            {/* кнопки */}
            <div className="flex justify-between pt-6">

                <ButtonFilter text="Filter" iconComponent={<FilterIcon />} />
                <div className="flex gap-4 items-center">
                    <p className="button-text">Sort By</p>
                    <div>
                        <SelectMenu />
                    </div>
                </div>
            </div>
            {/* контент */}
            <div className="flex h-full w-full pt-4 justify-between">
                <div className="hidden lg:block lg:basis-[23%] h-full">
                    <CoursesFilter />
                </div>
                <div className="w-full lg:basis-[73%] h-full ">
                    <div className='grid grid-cols-1   sm:grid-cols-2 sm:gap-x-5 mx-auto sm:mx-0 md:grid-cols-3   gap-4 md:gap-9 sm:place-items-center '>


                    </div>
                    <PagePagination />

                </div>

            </div>



        </div>
    )
}






export default AllCourses






