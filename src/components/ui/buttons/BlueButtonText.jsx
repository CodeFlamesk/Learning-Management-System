import React from 'react'

const BlueButtonText = ({
    text
}) => {
    return (
        <button className='text-primary-500 rounded-lg bg-white font-medium text-sm  hover:text-text-dark'>
            {text}
        </button>
    )
}

export default BlueButtonText