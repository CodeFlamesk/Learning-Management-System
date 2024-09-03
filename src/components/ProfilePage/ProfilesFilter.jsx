import FilterIcon from "@components/PageCategories/icon/Filter";
import SelectMenu from "@components/PageCategories/SelectMenu";
import ButtonFilter from "@components/ui/buttons/ButtonFilter";
import Find from '../Header/img/Find.webp'
const ProfilesFilter = ({ styles }) => {
    return (
        <div className={`flex flex-col md:flex-row md:items-center gap-4  ${styles} `}>

            <label htmlFor="searchInput" className=" flex  border border-gray-700 rounded-lg  p-2.5 gap-3  md:mr-auto  items-center">
                <input id="searchInput" type="text" className='text-grey-700  text-sm leading-5 font-medium w-full focus:outline-none' placeholder="Search User" />
                <button type="button" ><img src={Find} alt="Search" /></button>
            </label>
            <div className="flex flex-col md:flex-row  items-center " >
                <p className="font-normal text-base text-grey-900 pr-[15px]">Sort&nbsp;By</p>
                <div className="flex flex-col gap-4 xs:flex-row justify-between md:justify-normal w-full mt-4 md:mt-0">
                    <SelectMenu />
                    <ButtonFilter text='Filter' iconComponent={<FilterIcon />} styles='xs:ml-6' />
                </div>

            </div>

        </div>
    );
};
export default ProfilesFilter