import React from 'react';
import ArrowLeft from './icon/ArrowLeft';
const SliderButton = () => {
    return (
        <>
            <div className='flex gap-4 sm:gap-6'>
                <button className="flex items-center justify-center swiper-button-prev w-12 sm:w-14 h-10   bg-bts-grey rounded-lg transition-all duration-300 hover:bg-sl-blue"><ArrowLeft /></button>
                <button className="flex items-center justify-center swiper-button-next rotate-180 bg-bts-grey w-12 sm:w-14 h-10  rounded-lg transition-all duration-300 hover:bg-sl-blue"><ArrowLeft /></button>
            </div >

        </>

    )
}

export default SliderButton