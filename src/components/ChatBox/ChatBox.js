import React from 'react'
import './ChatBox.css'
import chat from '../../assets/chat.json'
import ChatMessage from '../ChatMessage/ChatMessage.js'
import SendMessage from '../SendMessage/SendMessage'

const ChatBox = () => {
    return (
        <div className="ChatBox">
            {chat.map(msg => <ChatMessage key={msg.id} text={msg.text} direction={msg.direction} timestamp={msg.timestamp} status={msg.status} />)}
            <SendMessage />
        </div>
    )
}

export default ChatBox
