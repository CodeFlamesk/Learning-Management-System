

const ButtonBlue = ({ text }) => {
    return (
        <button className="text-white duration-300 transition-all text-sm leading-relaxed bg-blue rounded-lg font-medium py-2.5 px-6 hover:bg-text-dark transition-all duration-300 transform hover:translate-x-0.5 hover:translate-y-0.5">
            {text}
        </button>
    )
}

export default ButtonBlue