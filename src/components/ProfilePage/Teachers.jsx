import Subheading from "@components/ui/Subheading";
import AuthorRonaldImg from "../CoursesPageCard/img/author.webp";
import Subtitle from "@components/ui/Subtitle";
import ArrowIconBack from "./icon/ArrowIconBack";
import DotsIcon from "./icon/DotsIcon";
import { useState, useEffect, useRef } from "react";

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
    }, [saveMessages]);





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
                <div className="flex flex-col border-y border-grey-border pt-7 px-4 overflow-auto max-h-[460px] custom-scrollbar ">
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
                    {saveMessages.map((msgi, index) => (
                        <div key={index}>
                            <p className="chat-time  text-end mt-6">{msgi.time}</p>
                            <p className="chat-my-message">{msgi.text}</p>

                        </div>))}
                    <div ref={messagesEndRef} className="pt-7" />

                </div>

                <form className="flex px-4 pt-4  gap-4" onSubmit={handleSendMessage}>
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
            </div>
        </div>

    );
};
export default Teachers;

/* import { useState, useRef, useEffect } from "react";
import Subheading from "@components/ui/Subheading";
import AuthorRonaldImg from "../CoursesPageCard/img/author.webp";
import Subtitle from "@components/ui/Subtitle";
import ArrowIconBack from "./icon/ArrowIconBack";
import DotsIcon from "./icon/DotsIcon";

const formatTime = (date) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    return formatter.format(date).toLowerCase();
};

const Teachers = () => {
    const [sendMessage, setSendMessage] = useState("");
    const [message, setMessage] = useState([]);
    const messagesEndRef = useRef(null); // Реф для автоматичного прокручування

    const handleSendMessage = (event) => {
        event.preventDefault();
        if (sendMessage.trim()) {
            setMessage([...message, { text: sendMessage, time: formatTime(new Date()) }]);
            setSendMessage(""); // Очищення поля вводу після відправлення повідомлення
        }
    };

    useEffect(() => {
        // Прокручування до кінця контейнера після оновлення повідомлень
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }, [message]); // Залежність від повідомлень

    return (
        <div className="flex flex-col w-full pb-6">
            <Subheading title="Message" />
            <div className="flex flex-col border border-grey-border py-4 rounded-2xl mt-4">
                <div className="flex justify-between items-center gap-4 px-4 pb-4">
                    <div className="flex gap-2 items-center">
                        <ArrowIconBack />
                        <img src={AuthorRonaldImg} alt="Ronald Richards" className="w-[60px] h-[60px] rounded-full" />
                        <Subtitle title="Ronald Richards" />
                    </div>
                    <DotsIcon />
                </div>
                <div className="flex flex-col border-y border-grey-border pt-7 px-4 overflow-y-auto max-h-[460px]">
                    <div className="mx-auto text-center p-2 border border-grey-border bg-grey-100 rounded-lg text-xs text-grey-900 font-semibold max-w-max">
                        Today
                    </div>
                    <p className="chat-time text-end mt-6">10:25 am</p>
                    <p className="chat-my-message">Hello</p>
                    <p className="chat-my-message">Just wanted to tell you that I started your course and it's going great!!</p>
                    <div className="flex flex-col pt-6">
                        <div className="flex gap-2 items-center pb-2">
                            <img src={AuthorRonaldImg} alt="Ronald Richards" className="w-10 h-10 rounded-full" />
                            <p className="chat-time">10:25 am</p>
                        </div>
                        <p className="chat-teacher-message">
                            Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP
                        </p>
                    </div>
                    <p className="chat-time text-end mt-6">10:26 am</p>
                    <p className="chat-my-message">Yes Sure</p>
                    {message.map((msg, index) => (
                        <div key={index}>
                            <p className="chat-time text-end mt-6">{msg.time}</p>
                            <p className="chat-my-message">{msg.text}</p>
                        </div>
                    ))}
                    <div ref={messagesEndRef} className="pt-7" />
                </div>


                <form className="flex px-4 pt-4 gap-4" onSubmit={handleSendMessage}>
                    <label htmlFor="typeMessage" className="w-full">
                        <input
                            id="typeMessage"
                            type="text"
                            placeholder="Type your message..."
                            className="w-full p-2 border border-grey-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setSendMessage(e.target.value)}
                            value={sendMessage}
                        />
                    </label>
                    <button type="submit" className=" py-[13] px-4 bg-blue rounded-lg text-sm text-white font-medium hover:bg-white hover:text-black box-border border-2 border-blue  duration-300 max-h-12  ">Send</button>

                </form>
            </div>
        </div>
    );
};

export default Teachers;
 */