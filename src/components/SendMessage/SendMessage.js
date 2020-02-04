import React from 'react'
import useInputState from '../../hooks/useInputState'
import './SendMessage.css'

const SendMessage = () => {
    const [message, setMessage] = useInputState("")
    return (
        <div className="SendMessage">
            <input type="text" name="message" value={message} onChange={setMessage} placeholder="Send a message..." />
        </div>
    )
}

export default SendMessage
