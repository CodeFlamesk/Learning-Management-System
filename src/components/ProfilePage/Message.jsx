import Subheading from "@components/ui/Subheading";
import AuthorRonaldImg from "../CoursesPageCard/img/author.webp";
import SmallText from "@components/ui/SmallText";
import AuthorDevonImg from "./img/AuthorDevonImg.png";

import ButtonFilter from "@components/ui/buttons/ButtonFilter";
import FilterIcon from "../PageCategories/icon/Filter"
import SelectMenu from "@components/PageCategories/SelectMenu";
import Chat from "./Сhat";
import ProfilesFilter from "./ProfilesFilter";

const Message = () => {
    return (
        <div className="flex flex-col w-full pb-6">

            <Subheading title="Messages" />
            <ProfilesFilter styles="mt-4" />
            <Chat name='James Bond' imgAuthor={AuthorRonaldImg}>
                <div className="mx-auto text-center p-2 border border-grey-border bg-grey-100 rounded-lg text-xs text-grey-900 font-semibold  max-w-max ">
                    Today
                </div>
                <p className="chat-time  text-end mt-6">11:48 am</p>
                <p className="chat-my-message">Hello</p>
                <p className="chat-my-message"> I've reviewed your concerns and understand the issues you're encountering. To help you better, I've prepared some resources that should address your questions.</p>
                <div className="flex flex-col   pt-6">
                    <div className="flex gap-2 items-center pb-2">
                        <img src={AuthorRonaldImg} alt="James Bond" className="w-10 h-10 rounded-full" />
                        <p className="chat-time ">12:25 am</p>
                    </div>
                    <p className=" chat-teacher-message ">Thank you for asking your doubt. I'll send you a PDF file that covers the problems you're facing. If you have any further questions or need more clarification after reviewing the PDF, feel free to reach out to me anytime. I'm here to help</p>   </div>
            </Chat>

            <Chat name='Devon Lane' imgAuthor={AuthorDevonImg}>
                <div className="mx-auto text-center p-2 border border-grey-border bg-grey-100 rounded-lg text-xs text-grey-900 font-semibold  max-w-max ">
                    Today
                </div>
                <p className="chat-time  text-end mt-6">10:00 am</p>
                <p className="chat-my-message">Hello</p>
                <p className="chat-my-message"> Thanks for reaching out.</p>
                <div className="flex flex-col   pt-6">
                    <div className="flex gap-2 items-center pb-2">
                        <img src={AuthorDevonImg} alt="Devon Lane" className="w-10 h-10 rounded-full" />
                        <p className="chat-time ">10:05 am</p>
                    </div>
                    <p className=" chat-teacher-message ">I’ll Get back to you as soon as possbile.</p>   </div>
            </Chat>


        </div>
    );
};
export default Message;