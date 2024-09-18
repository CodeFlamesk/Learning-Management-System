import { useNavigate } from "react-router-dom";

const ButtonLinks = ({ link, text }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate(link);
        }, 200);
    };

    return (
        <p onClick={handleClick} className="text-grey-300 cursor-pointer  text-sm leading-relaxed font-medium  hover:text-blue transition-all duration-300">
            {text}
        </p>
    );
};

export default ButtonLinks;
