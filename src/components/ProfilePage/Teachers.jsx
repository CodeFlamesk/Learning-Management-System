import Subheading from "@components/ui/Subheading";
import AuthorRonaldImg from "../CoursesPageCard/img/author.webp";
import Subtitle from "@components/ui/Subtitle";
import ArrowIconBack from "./icon/ArrowIconBack";
import DotsIcon from "./icon/DotsIcon";
import { useState, useEffect, useRef } from "react";
import SendIcon from "./icon/SendIcon";
import SmallText from "@components/ui/SmallText";
import CloseIcon from "./icon/CloseIcon";

const formatTime = (date) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    return formatter.format(date).toLowerCase();
};

const Teachers = () => {

    const [sendMessage, setSendMessage] = useState('');
    const [saveMessages, setSaveMessages] = useState([]);
    const [openChat, setOpenChat] = useState();
    const [more, setMore] = useState();
    const [delate, setDelate] = useState();

    const handleSendMessage = (event) => {
        event.preventDefault();
        if (sendMessage.trim()) {
            setSaveMessages([...saveMessages, { text: sendMessage, time: formatTime(new Date()) }]);
            setSendMessage('');
        }

    }
    const messagesEndRef = useRef(null);
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });

        }
    }, [saveMessages, openChat]);





    return (

        <div className="flex flex-col w-full pb-6 mb-auto">
            <Subheading title="Message" />
            {!delate &&
                <div
                    className={`flex flex-col border border-grey-border pt-4 rounded-2xl mt-4 overflow-hidden group: ${!openChat ? ' hover:border-blue hover:bg-blue-lite   group  transition-all duration-300' : ''}`}
                >
                    <div className="flex px-4 pb-4 flex-col justify-center">
                        <div className="flex items-center justify-between relative">
                            <div htmlFor="buttonmassege" className="flex items-center gap-2 relative">
                                <button
                                    id="buttonmassege"
                                    className={`pointer transition-transform duration-300  ${!openChat ? 'group-hover:text-blue' : ''}`}
                                    onClick={() => setOpenChat(!openChat)} >
                                    {openChat ? <ArrowIconBack /> : <SendIcon />}
                                </button>
                                <img src={AuthorRonaldImg} alt="Ronald Richards" className="w-[60px] h-[60px] rounded-full" />
                                <Subtitle title="Ronald Richards" />
                            </div>
                            {!openChat && saveMessages.length > 0 ? (
                                <SmallText title={saveMessages[saveMessages.length - 1].time} />
                            ) : (
                                <button onClick={() => setMore(!more)}>{more ? (<div className="flex  p-4 justify-center items-center absolute gap-6 border-2 border-sl-blue  rounded-lg top-0 right-0">
                                    <button onClick={setDelate}>  <p className="text-red-youtube hover:scale-110 duration-300 transition-all ">Delate</p></button>
                                    <CloseIcon />
                                </div>)
                                    : (<div className="mr-4"><DotsIcon /></div>)}</button>

                            )}
                        </div>

                        {!openChat && saveMessages.length > 0 && (

                            <div className="font-medium text-base text-grey-900  pt-4 truncate  ... ">
                                {saveMessages[saveMessages.length - 1].text}
                            </div>


                        )}
                    </div>


                    {
                        openChat && (<>   <div className="flex flex-col border-y border-grey-border pt-7 px-4 overflow-y-auto overflow-x-hidden max-h-[490px] custom-scrollbar ">
                            <div className="mx-auto text-center p-2 border border-grey-border bg-grey-100 rounded-lg text-xs text-grey-900 font-semibold  max-w-max ">Today</div>
                            <p className="chat-time  text-end mt-6">10:25 am</p>
                            <p className="chat-my-message">Hello</p>
                            <p className="chat-my-message"> Just wanted to tell you that i started your course and its going great!!</p>
                            <div className="flex flex-col   pt-6">
                                <div className="flex gap-2 items-center pb-2">
                                    <img src={AuthorRonaldImg} alt="Ronald Richards" className="w-10 h-10 rounded-full" />
                                    <p className="chat-time ">10:25 am</p>
                                </div>
                                <p className=" chat-teacher-message ">Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP </p>   </div>
                            <p className="chat-time  text-end mt-6">10:26 am</p>
                            <p className="chat-my-message">Yes Sure</p>
                            {saveMessages.map((msgi, index) => (
                                <div key={index}>
                                    <p className="chat-time  text-end mt-6 ">{msgi.time}</p>
                                    <p className="chat-my-message break-words ">{msgi.text}</p>
                                </div>
                            ))}
                            <div ref={messagesEndRef} className="pt-7" />

                        </div>

                            <form className="flex px-4 py-4  gap-4" onSubmit={handleSendMessage}>
                                <label htmlFor="typeMessage" className="w-full">
                                    <input
                                        id="typeMessage"
                                        type="text"
                                        placeholder="Type your message..."
                                        className="input-message "
                                        value={sendMessage}
                                        onChange={(e) => setSendMessage(e.target.value)}
                                    />
                                </label>

                                <button type="submit" className=" py-[13] px-4 bg-blue rounded-lg text-sm text-white font-medium hover:bg-white hover:text-black box-border border-2 border-blue  duration-300 max-h-12  ">Send</button>
                            </form>
                        </>
                        )
                    }

                </div>
            }
        </div>

    );
};
export default Teachers;
