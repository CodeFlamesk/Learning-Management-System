import React from 'react';


const Rating = ({ iconComponent }) => {
    return (
        <div className="flex items-center ">
            {Array(5).fill(null).map((_, index) => (

                <p className='flex w-5 h-5  items-center' key={index}>{iconComponent}</p>

            ))}
        </div>
    );
}

export default Rating;