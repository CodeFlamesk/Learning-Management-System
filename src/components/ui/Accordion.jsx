import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';
import ArrowDown from '@/components/PageCategories/icon/ArrowDown';


const CustomSelect = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);

        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="custom-select" ref={dropdownRef}>
            <div className="custom-select__header" onClick={handleToggle}>

                {selectedOption ? selectedOption.label : 'Theme'}
                <span className={`custom-select__arrow ${isOpen ? 'open' : ''}`}> <ArrowDown /> </span>
            </div>
            {isOpen && (
                <ul className="custom-select__options">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="custom-select__option"
                            onClick={() => handleOptionClick(option)}
                        >

                            {
                                selectedOption && selectedOption.value === option.value && (
                                    <span className="selected-option"> <ArrowDown /> </span>
                                )
                            }
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
