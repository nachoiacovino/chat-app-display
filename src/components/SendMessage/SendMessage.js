import React, { memo } from 'react'
import useInputState from '../../hooks/useInputState'
import './SendMessage.css'
import ArrowDown from '../ArrowDown/ArrowDown'

const SendMessage = ({ addMsg, scrollDown, buttonDisable }) => {
    const [message, setMessage, resetMessage] = useInputState("")

    const handleSubmit = e => {
        e.preventDefault()
        addMsg(message)
        resetMessage()
    }

    return (
        <div className="SendMessage">
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" value={message} onChange={setMessage} placeholder="Send a message..." aria-label="Send a message" />
            </form>
            <ArrowDown scrollDown={scrollDown} buttonDisable={buttonDisable} />
        </div>
    )
}

export default memo(SendMessage)
