import SmallText from "@/components/ui/SmallText"
import Subtitle from "@/components/ui/Subtitle"

const CommentsSlide = ({ iconComponent, text, imgComments, author, profession }) => {
    return (
        <div className="flex flex-col p-6 bg-white border-grey-border   rounded-2xl border border-solid  h-full">
            <p className="pl-1.5">{iconComponent}</p>
            <p className="font-normal text-sm sm:text-base leading-6 sm:leading-7 pt-2 sm:pt-5 ">{text}</p>
            <div className="flex pt-2 items-center  mt-auto">
                <img src={imgComments} alt="author" />
                <div className="pl-2">
                    <Subtitle title={author} />
                    <SmallText title={profession} />
                </div>
            </div>
        </div>
    )
}

export default CommentsSlide