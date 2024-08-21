import React, { useState } from 'react';
import CustomSelect from '@/components/ui/Accordion';
import ArrowDown from './icon/ArrowDown';

const SelectMenu = () => {

    const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
    const priceFilters = [
        { value: 'under_100', label: 'Relevance' },
        { value: '100_to_500', label: 'Relevance' },
        { value: 'over_500', label: 'Relevance' },
    ];
    const handlePriceFilterChange = (filter) => {
        setSelectedPriceFilter(filter);
        console.log('Selected Price Filter:', filter);
    };

    return (
        <div>
            <CustomSelect options={priceFilters} onSelect={<ArrowDown />} />

        </div>
    );
};

export default SelectMenu;