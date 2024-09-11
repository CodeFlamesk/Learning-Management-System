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
import { Pagination } from "swiper/modules";
import PaginationFunction from "@components/Pagination/PaginationaFunction";

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

    const data = [
        {
            id: "1",
            name: "Ronald Richards",
            imgAuthor: AuthorRonaldImg,
        },
        {
            id: "2",
            name: "Ronald Richards",
            imgAuthor: AuthorRonaldImg,
        },
        {
            id: "3",
            name: "Ronald Richards",
            imgAuthor: AuthorRonaldImg,
        },
        {
            id: "4",
            name: "Ronald Richards",
            imgAuthor: AuthorRonaldImg,
        },
        {
            id: "5",
            name: "Ronald Richards",
            imgAuthor: AuthorRonaldImg,
        }
    ];
    const [messageCard, setMessageCart] = useState(data);

    const handleDeletedItem = (id) => {
        setMessageCart((prevState) => prevState.filter((item) => item.id !== id));

    };


    return (

        <div className="inline-flex flex-col w-full ">
            <PaginationFunction
                itemsPerPage={3}
                data={messageCard}
                title='Message'
                showValue1='3'
                showValue2='5'
                showValue3='27'
                stylesRender="w-[100%]"
                renderItem={(item) => (

                    <TeachersItem
                        key={item.id}
                        {...item}
                        onDeleted={handleDeletedItem}
                        id={item.id}
                    />


                )}
            />
        </div>



    );
};

const TeachersItem = ({ imgAuthor, name, onDeleted, id }) => {
    return (
        <div className=" flex  w-full">
            <Chat name={name} imgAuthor={imgAuthor} onDeleted={onDeleted} id={id}>
                <div className="mx-auto text-center p-2 border border-grey-border w-full bg-grey-100 rounded-lg text-xs text-grey-900 font-semibold  max-w-max ">
                    Today
                </div>
                <p className="chat-time  text-end mt-6">10:25 am</p>
                <p className="chat-my-message">Hello</p>
                <p className="chat-my-message"> Just wanted to tell you that i started your course and its going great!!</p>
                <div className="flex flex-col   pt-6">
                    <div className="flex gap-2 items-center pb-2">
                        <img src={imgAuthor} alt="Ronald Richards" className="w-10 h-10 rounded-full" />
                        <p className="chat-time ">10:25 am</p>
                    </div>
                    <p className=" chat-teacher-message ">Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP </p>   </div>
                <p className="chat-time  text-end mt-6">10:26 am</p>
                <p className="chat-my-message">Yes Sure</p>
            </Chat>
        </div>

    );
};


export default Teachers;