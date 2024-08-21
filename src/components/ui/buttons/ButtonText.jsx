const ButtonText = ({ text, href }) => {
    return (
        <a href={href} className="text-grey-300 duration-300  text-sm leading-relaxed font-medium  hover:text-blue transition-all duration-300 ">
            {text}
        </a>
    )
}

export default ButtonText