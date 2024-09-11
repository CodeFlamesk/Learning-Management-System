import Subheading from "@components/ui/Subheading";

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

const Chat = ({ children, name, imgAuthor, id, onDeleted, title }) => {

    const [sendMessage, setSendMessage] = useState('');
    const [saveMessages, setSaveMessages] = useState([]);
    const [openChat, setOpenChat] = useState();
    const [more, setMore] = useState();


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


    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMore(false);
            }
        };
        if (more) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else { document.removeEventListener("mousedown", handleClickOutside); }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [more]);


    return (

        <div className="flex flex-col w-full ">
            <Subheading title={title} />

            <div
                className={`flex flex-col border border-grey-border pt-4 rounded-2xl mt-4 overflow-hidden group: ${!openChat ? ' hover:border-yellow hover:bg-blue-lite   group  transition-all duration-300' : ''}`}
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
                            <img src={imgAuthor} alt={name} className="w-[60px] h-[60px] rounded-full" />
                            <Subtitle title={name} />
                        </div>
                        {!openChat && saveMessages.length > 0 ? (
                            <SmallText title={saveMessages[saveMessages.length - 1].time} />
                        ) : (
                            <button ref={menuRef} onClick={() => setMore(!more)}>{more ? (<div className="flex  p-4 justify-center items-center absolute gap-6 border-2 border-sl-blue  rounded-lg top-0 right-0">
                                <button onClick={() => onDeleted(id)}>  <p className="text-red-youtube hover:scale-110 duration-300 transition-all ">Delete</p></button>
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
                        {children}
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
                                    className="input-message input-shadow"
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

        </div>

    );
};
export default Chat;
