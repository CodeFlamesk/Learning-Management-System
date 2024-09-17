import MainTitle from "@/components/ui/MainTitle";
import Text from "@/components/ui/Text";
import ButtonBlue from '@/components/ui/buttons/ButtonBlue';
import { useNavigate } from "react-router-dom";

const MainBlockText = ({
    text,
    buttonText,
    title
}) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate("/myprofile/profile");
        }, 300);
    };

    return (
        <div onClick={handleClick}>
            <MainTitle title={title} styles={" mb-4"} />
            <Text styles={" mb-6"} text={text} />
            <ButtonBlue text={buttonText} />
        </div>
    )
}

export default MainBlockText;
