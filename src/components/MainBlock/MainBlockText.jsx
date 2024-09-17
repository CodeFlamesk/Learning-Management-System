

import MainTitle from "@/components/ui/MainTitle";
import Text from "@/components/ui/Text";
import ButtonBlue from '@/components/ui/buttons/ButtonBlue';
import { Link } from "react-router-dom";

const MainBlockText = ({
    text,
    buttonText,
    title
}) => {
    return (
        <Link to="myprofile/profile">
            <MainTitle title={title} styles={" mb-4"} />
            <Text styles={" mb-6"} text={text} />
            <ButtonBlue text={buttonText} />
        </Link>
    )
}

export default MainBlockText