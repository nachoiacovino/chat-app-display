import React from 'react'
import './Header.css'
import { ReactComponent as Back } from '../../assets/svg/Back.svg'
import { ReactComponent as User } from '../../assets/svg/User.svg'

const Header = ({ receivedMsgs }) => {
    return (
        <div className="Header">
            <div className="Header-msgs">
                {receivedMsgs} new messages
            </div>
            <div className="Header-user">
                <Back />
                <User className="Header-user-avatar" />
                <div className="Header-user-title">
                    <p className="Header-username">user113</p>
                    <p className="Header-writing">User is typing...</p>
                </div>
            </div>
        </div>
    )
}

export default Header
