import React, { useState, useEffect, memo } from 'react'
// import VizSensor from 'react-visibility-sensor'
import './ChatMessage.css'
import formatTime from '../../helpers/formatTime'
import { ReactComponent as SingleTick } from '../../assets/svg/SingleTick.svg'
import { ReactComponent as DoubleTick } from '../../assets/svg/DoubleTick.svg'
import { ReactComponent as ReadTick } from '../../assets/svg/ReadTick.svg'

const ChatMessage = ({ id, text, direction, timestamp, status, readMsg }) => {
    const [statusIcon, setStatusIcon] = useState("")
    const time = formatTime(timestamp)

    useEffect(() => {
        if (direction === "out") {
            if (status === "read") setStatusIcon(<ReadTick />)
            else if (status === "sent") setStatusIcon(<SingleTick />)
            else if (status === "received") setStatusIcon(<DoubleTick />)
            else setStatusIcon("")
        }
    }, [direction, status])
    
    useEffect(() => {
        if (direction === "in" && status === "received") readMsg(id)
    }, [direction, id, readMsg, status])

    return (
        <div className="ChatMessage-container">
            <div className={`ChatMessage-${direction === "in" ? "in" : "out"}`}>
                {text} 
                <div className="ChatMessage-time">
                    {time}
                </div>
                {direction === "out" && 
                    <div className="ChatMessage-status">
                        {statusIcon}
                    </div>
                }
            </div>
        </div>
    )
}

export default memo(ChatMessage)
