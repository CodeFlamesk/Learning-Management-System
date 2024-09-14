import MainTitle from "@/components/ui/MainTitle"
import ButtonFilter from "@/components/ui/buttons/ButtonFilter"
import FilterIcon from '@/components/PageCategories/icon/Filter'
import SelectMenu from "./SelectMenu"
import { useState, useRef, useEffect } from "react"
import CoursesFilter from "@/components/ui/CoursesFilter";

import PagePagination from "./PagePagination";


const AllCourses = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [more, setMore] = useState(false)
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMore(false);
            }
        };
        if (more) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else { document.removeEventListener("mousedown", handleClickOutside); }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);
    return (
        <div className="flex flex-col">

            <MainTitle title="Design Courses" styles="pt-6" />
            <h3 className="pt-6 text-2xl  text-grey-900   font-semibold">All Development Courses</h3>

            <div className="flex flex-col-reverse items-end gap-3 ft:flex-row ft:justify-between pt-6  ">

                <button onClick={() => setShowFilter(prevState => !prevState)}><ButtonFilter text="Filter" iconComponent={<FilterIcon />} /></button>
                <div className="flex gap-4 items-center justify-end ">
                    <p className="button-text  ">Sort By:</p>
                    <div className="flex ">
                        <SelectMenu />
                    </div>
                </div>
            </div>

            <div className="flex h-full w-full pt-4 justify-between relative">

                <div ref={menuRef} className={`   ${showFilter ? ' lg:block lg:basis-[23%] max-h-[1500px] overflow-auto w-[200px] lg:relative absolute rounded-r-2xl bg-white top-[66px]  lg:top-0 lg:border-none border-y border-r border-blue' : 'lg:block pt-0 lg:basis-[23%] h-full hidden'}`}>
                    <CoursesFilter />
                </div>



                <div className="w-full lg:basis-[73%] h-full ">
                    <div className='grid grid-cols-1   sm:grid-cols-2 sm:gap-x-5 mx-auto sm:mx-0 md:grid-cols-3   gap-4 md:gap-9 sm:place-items-center '>


                    </div>
                    <PagePagination />

                </div>

            </div>



        </div >
    )
}






export default AllCourses






