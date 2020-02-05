import React from 'react'
import './Header.css'

const Header = ({ receivedMsgs }) => {
    return (
        <div className="Header">
            Messages Received: {receivedMsgs}
        </div>
    )
}

export default Header
