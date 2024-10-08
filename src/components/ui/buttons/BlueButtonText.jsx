import React from 'react'

const BlueButtonText = ({
    text
}) => {
    return (
        <a href="https://example.com/help" target="_blank" className='text-primary-500 rounded-lg bg-white font-medium text-sm  hover:text-text-dark'>
            {text}
        </a>
    )
}

export default BlueButtonText