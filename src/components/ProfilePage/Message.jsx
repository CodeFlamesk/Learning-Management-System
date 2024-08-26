import Subheading from "@components/ui/Subheading";
import AuthorRonaldImg from "../CoursesPageCard/img/author.webp";
import SmallText from "@components/ui/SmallText";
import AuthorDevonImg from "./img/AuthorDevonImg.png";
import Find from '../Header/img/Find.webp'
import ButtonFilter from "@components/ui/buttons/ButtonFilter";
import FilterIcon from "../PageCategories/icon/Filter"
import SelectMenu from "@components/PageCategories/SelectMenu";

const Message = () => {
    return (
        <div className="flex flex-col w-full pb-6">

            <Subheading title="Messages" />
            <div className="flex flex-col md:flex-row md:items-center gap-4">

                <label htmlFor="searchInput" className=" flex  border border-gray-700 rounded-lg  p-2.5 gap-3  md:mr-auto mt-4">
                    <input id="searchInput" type="text" className='text-grey-700  text-sm leading-5 font-medium w-full focus:outline-none' placeholder="Search User" />
                    <button type="button" ><img src={Find} alt="Search" /></button>
                </label>
                <div className="flex items-center" >
                    <p className="font-normal text-base text-grey-900 pr-[15px]">Sort By</p>
                    <SelectMenu />

                    <ButtonFilter text='Filter' iconComponent={<FilterIcon />} styles='ml-6' />


                </div>

            </div>

            <div className="flex flex-col p-4 w-full border  border-grey-border rounded-2xl mt-5 gap-4">
                <div className="flex  w-full items-center">
                    <img src={AuthorRonaldImg} alt="AuthorRonaldImg" className="w-10 h-10 rounded-full" />
                    <Subheading title="Ronald Richards" styles="pl-2" />
                    <SmallText title="18th March, 2024" styles="ml-auto" />
                </div>
                <p className=" font-medium text-base text-grey-900  ">Thank you for asking your doubt, I’ll send you a pdf file which cover the problems you are facing. If you have any...</p>
            </div>
            <div className="flex flex-col p-4 w-full border  border-grey-border rounded-2xl mt-4 gap-4">
                <div className="flex  w-full items-center">

                    <img src={AuthorDevonImg} alt="AuthorDevonImg" className="w-10 h-10 rounded-full" />
                    <Subheading title="Devon Lane" styles="pl-2" />
                    <SmallText title="18th March, 2024" styles="ml-auto" />
                </div>
                <p className=" font-medium text-base text-grey-900  ">I’ll Get back to you as soon as possbile.</p>
            </div>


        </div>
    );
};
export default Message;