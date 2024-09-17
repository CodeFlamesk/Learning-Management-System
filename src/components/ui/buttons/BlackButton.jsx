
import React from 'react';


const BlackButton = ({ buttonText, iconComponent, href, style }) => {
    return (
        <a href={href} type='button' className={`flex py-2.5 px-5 gap-x-1.5 font-medium bg-text-dark text-white items-center text-sm rounded-lg transition-all duration-300 hover:bg-primary-500   transition-all duration-300 transform hover:translate-x-0.5 hover:translate-y-0.5 ${style}`} >
            <div>{buttonText}</div>
            <div> {iconComponent}</div>
        </a >

    );
};
export default BlackButton;