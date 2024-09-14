import { useState } from "react";
import { useDispatch } from "react-redux";
import SmallText from "@components/ui/SmallText";
import CustomSelect from '@/components/ui/Accordion';
import ArrowDown from "@components/PageCategories/icon/ArrowDown";
import SubheadingM from "@components/ui/SubheadingM";
import ImageUploader from "./ImgUploader";

const Profile = () => {
    const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
    const [nameValue, setNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');

    const dispatch = useDispatch();

    const priceFilters = [
        { value: 'English', label: 'English' },
        { value: 'French', label: 'French' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'Ukrainian', label: 'Ukrainian' },
        { value: 'German', label: 'German' },
        { value: 'Portuguese', label: 'Portuguese' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Italian', label: 'Italian' },
        { value: 'Arabic', label: 'Arabic' },
    ];

    const handlePriceFilterChange = (filter) => {
        setSelectedPriceFilter(filter);
        console.log('Selected Price Filter:', filter);
    };

    const handleSaveName = (event) => {
        event.preventDefault();
        const changeName = `${nameValue} ${lastNameValue}`;
        dispatch({ type: 'CHANGE_NAME', payload: changeName });
    };

    return (
        <div className="flex flex-col relative">
            <form className="flex flex-col w-full border border-grey-border py-6 px-6 rounded-2xl">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col tb:flex-row w-full gap-x-60w tb:justify-between gap-y-4">
                        <label htmlFor="FirstName" className="flex flex-col w-full">
                            <SmallText title="First Name" styles="flex inline-flex cursor-pointer" />
                            <input
                                id="FirstName"
                                type="text"
                                value={nameValue}
                                placeholder="Name of card"
                                name="FirstName"
                                onChange={(e) => setNameValue(e.target.value)}
                                className="inputs-checkout input-shadow"
                            />
                        </label>

                        <label htmlFor="LastName" className="flex flex-col w-full">
                            <SmallText title="Last Name" styles="flex inline-flex cursor-pointer" />
                            <input
                                id="LastName"
                                type="text"
                                value={lastNameValue}
                                name="LastName"
                                placeholder="Card Number"
                                onChange={(e) => setLastNameValue(e.target.value)}
                                className="inputs-checkout input-shadow"
                            />
                        </label>
                    </div>
                    <div className="w-full tb:w-[46.5%]">
                        <label htmlFor="Headline">
                            <SmallText title="Headline" styles="flex inline-flex cursor-pointer tb:pt-4" />
                        </label>
                        <input
                            id="Headline"
                            type="text"
                            placeholder="Headline"
                            name="Headline"
                            className="inputs-checkout input-shadow"
                        />
                    </div>
                </div>
                <label htmlFor="Description">
                    <SmallText title="Description" styles="flex inline-flex cursor-pointer pt-3" />
                </label>
                <textarea
                    id="Description"
                    name="Description"
                    placeholder="Description"
                    type="text"
                    className="resize-y p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400 min-h-120w max-h-200w inputs-checkout input-shadow"
                ></textarea>

                <label htmlFor="Language" className="pb-1.5 pt-4">
                    <SmallText title="Language" styles="flex inline-flex cursor-pointer" />
                </label>

                <div className="w-[46.5%]">
                    <CustomSelect
                        options={priceFilters}
                        onSelect={<ArrowDown />}
                        styles="custom-select__language"
                        text="Language"
                        styleheader="custom-select-language__header"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSaveName}
                    className="bg-grey-900 text-white font-medium text-sm px-4 py-3 sm:w-[126px] mt-4 rounded-lg hover:bg-white hover:text-grey-900 box-border border hover:border-grey-900 duration-300 transition-all"
                >
                    Save
                </button>
            </form>

            <form className="flex flex-col w-full border border-grey-border p-6 mt-6 rounded-2xl">
                <SubheadingM title="Image Preview" styles="xs:text-lg text-grey-900" />
                <ImageUploader uploading="Add/Change Image" />
            </form>

            <form className="inline-block flex-col w-full border border-grey-border mt-6 p-6 rounded-2xl">
                <SubheadingM title="Links" />

                <label htmlFor="Website">
                    <SmallText title="Website" styles="flex inline-flex cursor-pointer" />
                </label>
                <input
                    id="Website"
                    type="text"
                    placeholder="Website"
                    name="Website"
                    className="inputs-checkout input-shadow"
                />
                <label htmlFor="Formerlytwitter">
                    <SmallText title="X(Formerly twitter)" styles="flex inline-flex cursor-pointer pt-4" />
                </label>
                <input
                    id="Formerlytwitter"
                    type="text"
                    placeholder="Formerlytwitter"
                    name="Formerlytwitter"
                    className="inputs-checkout input-shadow"
                />
                <label>
                    <SmallText title="Linkdin" styles="flex inline-flex cursor-pointer pt-4" />
                    <input
                        type="text"
                        placeholder="Linkdin"
                        name="Linkdin"
                        className="inputs-checkout input-shadow"
                    />
                </label>
                <label>
                    <SmallText title="Youtube" styles="flex inline-flex cursor-pointer pt-4" />
                    <input
                        type="text"
                        placeholder="Youtube"
                        name="Youtube"
                        className="inputs-checkout input-shadow"
                    />
                </label>
                <label>
                    <SmallText title="Facebook" styles="flex inline-flex cursor-pointer pt-4" />
                    <input
                        type="text"
                        placeholder="Facebook"
                        name="Facebook"
                        className="inputs-checkout input-shadow"
                    />
                </label>
            </form>
        </div>
    );
};

export default Profile;
