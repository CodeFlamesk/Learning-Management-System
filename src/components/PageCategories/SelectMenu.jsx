import React, { useState } from 'react';
import CustomSelect from '@/components/ui/Accordion';
import ArrowDown from './icon/ArrowDown';

const SelectMenu = () => {


    const priceFilters = [
        { value: 'under_1003', label: 'Relevance' },
        { value: '100_to_5030', label: 'Relevance' },
        { value: 'over_500', label: 'Relevance' },
    ];


    return (
        <div>
            <CustomSelect options={priceFilters} onSelect={<ArrowDown />} text="Theme" styles="custom-select__options" styleheader="custom-select__header " />

        </div>
    );
};

export default SelectMenu;