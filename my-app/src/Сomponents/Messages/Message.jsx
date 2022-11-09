import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Message.module.css";

export const Message = () => {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [messagesList, setMessageList] = useState([]);
    const [countMessage, setCountMessage] = useState(0);

    const addMessage = () => {
        let messageItem = { author: author, message: text };
        setMessageList([...messagesList, messageItem]);
        setCountMessage(countMessage + 1);
        setAuthor("");
        setText("");
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (messagesList.length > 0) {
                alert("Messages delivered");
            }
        }, 1500);
        return () => clearInterval(timeout);
    }, [messagesList]);

    const messages = messagesList.map((message, index) => {
        return (
            <li key={index}>
                Message from: {message.author} <br />
                Message: {message.message}
            </li>
        );
    });
    return (
        <div>
            <div className={style.title}>
                <h3> Total messages: {countMessage}</h3>
            </div>
            <div className={style.formMessage}>
                <input className={style.input}
                    value={author}
                    placeholder="Enter your name"
                    onChange={(e) => setAuthor(e.target.value)} />
                <input className={style.input}
                    value={text}
                    placeholder="Enter your message"
                    onChange={(e) => setText(e.target.value)} />
                <button className={style.btn}
                    onClick={addMessage}
                    disabled={!author || !text}>Send message</button>
            </div>
            <div>
                <ul>{messages}</ul>
            </div>
        </div>
    );
};


