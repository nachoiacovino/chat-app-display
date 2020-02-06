import React, { useState, useRef } from 'react'
// import InfiniteScroll from 'react-infinite-scroller'
import { FixedSizeList as List } from 'react-window'
import uuid from 'uuid/v4'
import './ChatBox.css'
import chat from '../../assets/chat.json'
import ChatMessage from '../ChatMessage/ChatMessage.js'
import SendMessage from '../SendMessage/SendMessage'
import Header from '../Header/Header'
import ArrowDown from '../ArrowDown/ArrowDown'

const ChatBox = () => {
    const [messages, setMessages] = useState(chat)
    const receivedMsgs = messages.filter(msg => msg.direction === "in" && msg.status === "received")
    const listRef = useRef()

    const addMsg = msg => {
        if (msg !== "") 
            setMessages([...messages, {
                "id": uuid(), 
                "direction": "out", 
                "status": "sent", 
                "timestamp": new Date().getTime().toString().substring(0, 10), 
                "text": msg
            }])
    }   

    const readMsg = id => {
        setMessages(messages.map(msg => msg.id === id ? {...msg, "status": "read"} : msg))
        console.log("hello hello")
    }

    const Row = ({ index, style }) => (
        <div style={style}>
           <ChatMessage 
                key={messages[index].id} 
                id={messages[index].id} 
                text={messages[index].text} 
                direction={messages[index].direction} 
                timestamp={messages[index].timestamp} 
                status={messages[index].status} 
                readMsg={readMsg} 
            />
        </div>
    )

    // console.log(receivedMsgs)

    const scrollDown = () => {
        listRef.current.scrollToItem(messages.length)

        for (let i = 0; i < receivedMsgs.length; i++) {
            console.log(receivedMsgs)
            readMsg(receivedMsgs.id)
        }
    }

    return (
        <div className="ChatBox">
            <Header receivedMsgs={receivedMsgs.length} />
            
            <div className="ChatBox-messages">
                <List
                    ref={listRef}
                    height={863}
                    itemCount={messages.length}
                    itemSize={45}
                    width={400}
                >
                    {Row}
                </List>
            </div>
            <ArrowDown scrollDown={scrollDown} />
            
            
            <SendMessage addMsg={addMsg} />
        </div>
    )
}

export default ChatBox
