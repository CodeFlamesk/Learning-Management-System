import Subheading from "@components/ui/Subheading";
import AuthorRonaldImg from "../CoursesPageCard/img/author.webp";
import Subtitle from "@components/ui/Subtitle";
import ArrowIconBack from "./icon/ArrowIconBack";
import DotsIcon from "./icon/DotsIcon";
import { useState, useEffect, useRef } from "react";
import SendIcon from "./icon/SendIcon";
import SmallText from "@components/ui/SmallText";
import CloseIcon from "./icon/CloseIcon";
import Chat from "./Сhat";
/* 
const formatTime = (date) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    return formatter.format(date).toLowerCase();
}; */

const Teachers = () => {

    /*    const [sendMessage, setSendMessage] = useState('');
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
    */




    return (
        <Chat name='Ronald Richards' imgAuthor={AuthorRonaldImg} title="Messages">
            <div className="mx-auto text-center p-2 border border-grey-border bg-grey-100 rounded-lg text-xs text-grey-900 font-semibold  max-w-max ">
                Today
            </div>
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
        </Chat>


    );
};
export default Teachers;
