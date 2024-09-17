const ButtonText = ({ text, href }) => {
    return (
        <a href={href} target="_blank" className="text-grey-300  text-sm leading-relaxed font-medium  hover:text-blue transition-all duration-300 ">
            {text}
        </a>
    );
};

export default ButtonText;