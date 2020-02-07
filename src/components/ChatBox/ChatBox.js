import React, { useState, useRef, useEffect, memo } from 'react'
import { FixedSizeList as List, areEqual } from 'react-window'
import { withWindowSizeListener } from 'react-window-size-listener'
import uuid from 'uuid/v4'
import './ChatBox.css'
import chat from '../../assets/chat.json'
import ChatMessage from '../ChatMessage/ChatMessage.js'
import SendMessage from '../SendMessage/SendMessage'
import Header from '../Header/Header'

const ChatBox = ({ windowSize: { windowHeight, windowWidth } }) => {
    const [messages, setMessages] = useState(chat)
    const [deviceWidth, setDeviceWidth] = useState(400)
    const [deviceHeight, setDeviceHeight] = useState(675)
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

    const readMsg = id => setMessages(messages.map(msg => msg.id === id ? {...msg, "status": "read"} : msg))

    const Row = memo(({ index, style }) => (
        <div style={style} className="ChatBox-Row">
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
    ), areEqual)

    const scrollDown = () => {
        let idx = messages.findIndex(msg => msg.direction === "in" && msg.status === "received")
        console.log(messages[idx])
        listRef.current.scrollToItem(idx)
    }


    useEffect(() => {
        if (windowWidth < 400) {
            setDeviceHeight(windowHeight - windowHeight / 10)
            setDeviceWidth(windowWidth)
        } else {
            setDeviceHeight(675)
            setDeviceWidth(400)
        }
        
    }, [windowHeight, windowWidth])

    console.log(windowWidth)
    console.log(windowHeight)

    return (
        <div className="ChatBox">
            <Header receivedMsgs={receivedMsgs.length} />
            <div className="ChatBox-messages">
                <List
                    ref={listRef}
                    height={deviceHeight}
                    itemCount={messages.length}
                    itemSize={42}
                    width={deviceWidth}
                >
                    {Row}
                </List>
            </div>
            <SendMessage addMsg={addMsg} scrollDown={scrollDown} buttonDisable={receivedMsgs.length === 0}/>
        </div>
    )
}

export default withWindowSizeListener(ChatBox)
