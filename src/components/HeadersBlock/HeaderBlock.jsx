import React from 'react'

const HeaderBlock = ({
    title,
    children,
    styles
}) => {
    return (
        <div className={`flex  tfe:flex-nowrap items-center justify-between gap-3 tfe:gap-5  mb-8 pt-7 sm:pt-14 ${styles} `} >
            <h2 className='text-grey-900 font-semibold leading-8 text-base tfe:text-lg sm:text-2xl max-w-full tfe:max-w-64 sm:max-w-72'>{title}</h2>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default HeaderBlock