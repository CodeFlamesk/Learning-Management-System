import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const BlackButtonLinks = ({ buttonText, iconComponent, link, style }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate(link);
        }, 300);
    };

    return (
        <Link onClick={handleClick} to={link} type='button' className={`flex py-2.5 px-5 gap-x-1.5 font-medium bg-text-dark text-white items-center text-sm rounded-lg hover:bg-primary-500   transition-all duration-300 transform hover:translate-x-0.5 hover:translate-y-0.5 ${style}`} >
            <div>{buttonText}</div>
            <div> {iconComponent}</div>
        </Link >
    );
};
export default BlackButtonLinks;