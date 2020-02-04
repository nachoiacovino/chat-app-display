import React from 'react'
import './ChatMessage.css'
import formatTime from '../../helpers/formatTime'
import { ReactComponent as SingleTick } from '../../assets/svg/SingleTick.svg'
import { ReactComponent as DoubleTick } from '../../assets/svg/DoubleTick.svg'
import { ReactComponent as ReadTick } from '../../assets/svg/ReadTick.svg'

const ChatMessage = ({ text, direction, timestamp, status }) => {
    const time = formatTime(timestamp)

    const msgStatus = status => {
        if (status === "read") return <ReadTick />
        else if (status === "sent") return <SingleTick />
        else if (status === "received") return <DoubleTick />
        else return ""
    }
    
    return (
        <div className="ChatMessage-container">
            <div className={`ChatMessage-${direction === "in" ? "in" : "out"}`}>
                {text} 
                <div className="ChatMessage-time">
                    {time}
                </div>
                {direction === "out" && 
                    <div className="ChatMessage-status">
                        {msgStatus(status)}
                    </div>
                }
            </div>
            
        </div>
    );
}

export default ChatMessage
