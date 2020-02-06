import React from 'react'
import './ArrowDown.css'
import { ReactComponent as Arrow } from '../../assets/svg/Arrow.svg'

const ArrowDown = ({ scrollDown }) => {
    return (
        <div className="ArrowDown" onClick={scrollDown}>
            <Arrow />
        </div>
    )
}

export default ArrowDown
