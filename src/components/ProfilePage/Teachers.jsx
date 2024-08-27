import Subheading from "@components/ui/Subheading";
import AuthorRonaldImg from "../CoursesPageCard/img/author.webp";
import Subtitle from "@components/ui/Subtitle";
import ArrowIconBack from "./icon/ArrowIconBack";
import DotsIcon from "./icon/DotsIcon";

const Teachers = () => {
    return (

        <div className="flex flex-col w-full pb-6">
            <Subheading title="Message" />
            <div className="flex flex-col  border border-grey-border py-4 rounded-2xl mt-4 ">
                <div className="flex justify-between items-center gap-4 px-4 pb-4 ">
                    <div className="flex gap-2 items-center">
                        <ArrowIconBack />
                        <img src={AuthorRonaldImg} alt="Ronald Richards" className="w-[60px] h-[60px] rounded-full" />
                        <Subtitle title="Ronald Richards" />
                    </div>
                    <DotsIcon />
                </div>
                <div className="flex flex-col border-y border-grey-border py-7 px-4">
                    <div className="mx-auto text-center p-2 border border-grey-border bg-grey-100 rounded-lg text-xs text-grey-900 font-semibold  max-w-max ">Today</div>
                    <p className="chat-time  text-end mt-6">10:25 am</p>
                    <p className="chat-my-message">Hello</p>
                    <p className="chat-my-message"> Just wanted to tell you that i started your course and its going great!!</p>
                    <div className="flex flex-col   pt-6">
                        <div className="flex gap-2 items-center pb-2">
                            <img src={AuthorRonaldImg} alt="Ronald Richards" className="w-10 h-10 rounded-full" />
                            <p className="chat-time ">10:25 am</p>
                        </div>
                        <p className=" chat-teacher-message ">Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP</p>
                    </div>
                    <p className="chat-time  text-end mt-6">10:26 am</p>
                    <p className="chat-my-message">Yes Sure</p>
                </div>
                <form className="flex px-4 pt-4  gap-4">
                    <label htmlFor="typeMessage" className="w-full">
                        <input
                            id="typeMessage"
                            type="text"
                            placeholder="Type your message..."
                            className="input-message " />
                    </label>

                    <button type="submit" className=" py-[13] px-4 bg-blue rounded-lg text-sm text-white font-medium">Send</button>
                </form>
            </div>
        </div>

    );
};
export default Teachers;