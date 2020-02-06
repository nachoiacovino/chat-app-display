import React from 'react'
import './Header.css'

const Header = ({ receivedMsgs }) => {
    return (
        <div className="Header">
            Unread messages: {receivedMsgs}
        </div>
    )
}

export default Header
