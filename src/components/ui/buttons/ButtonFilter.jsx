import React from 'react';
const ButtonFilter = ({ text, iconComponent }) => {
    return (
        <>
            <button type="button" className='flex py-3 px-6 gap-1.5 rounded-lg  border border-grey-900 solid max-w-full'>
                {iconComponent}
                <p className='button-text'>{text}</p>

            </button>
        </>
    );
};
export default ButtonFilter;