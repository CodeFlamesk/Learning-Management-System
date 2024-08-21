

import MainTitle from "@/components/ui/MainTitle";
import Text from "@/components/ui/Text";
import ButtonBlue from '@/components/ui/buttons/ButtonBlue';

const MainBlockText = ({
    text,
    buttonText,
    title
}) => {
    return (
        <>
            <MainTitle title={title} styles={" mb-4"} />
            <Text styles={" mb-6"} text={text} />
            <ButtonBlue text={buttonText} />
        </>
    )
}

export default MainBlockText