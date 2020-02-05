import React from 'react'
import useInputState from '../../hooks/useInputState'
import './SendMessage.css'

const SendMessage = ({ addMsg }) => {
    const [message, setMessage, resetMessage] = useInputState("")

    const handleSubmit = e => {
        e.preventDefault()
        addMsg(message)
        resetMessage()
    }

    return (
        <div className="SendMessage">
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" value={message} onChange={setMessage} placeholder="Send a message..." />
            </form>
        </div>
    )
}

export default SendMessage
