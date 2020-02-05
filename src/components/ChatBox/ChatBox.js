import React, { useState } from 'react'
import uuid from 'uuid/v4'
import './ChatBox.css'
import chat from '../../assets/chat.json'
import ChatMessage from '../ChatMessage/ChatMessage.js'
import SendMessage from '../SendMessage/SendMessage'
import Header from '../Header/Header'
import ArrowDown from '../ArrowDown/ArrowDown'

const ChatBox = () => {
    const [messages, setMessages] = useState(chat)
    const receivedMsgs = messages.filter(msg => msg.direction === "in" && msg.status === "received").length

    const addMsg = msg => setMessages([...messages, {"id": uuid(), "direction": "out", "status": "sent", "timestamp": new Date().getTime().toString().substring(0, 10), "text": msg}])

    return (
        <div className="ChatBox">
            <Header receivedMsgs={receivedMsgs} />
            <div className="ChatBox-messages">
                {messages.map(msg => <ChatMessage key={msg.id} text={msg.text} direction={msg.direction} timestamp={msg.timestamp} status={msg.status} />)}
            </div>
            <ArrowDown />
            <SendMessage addMsg={addMsg} />
        </div>
    )
}

export default ChatBox
