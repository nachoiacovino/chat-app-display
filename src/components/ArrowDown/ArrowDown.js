import React, { memo } from 'react'
import './ArrowDown.css'
import { ReactComponent as Arrow } from '../../assets/svg/Arrow.svg'

const ArrowDown = ({ scrollDown, buttonDisable }) => {
    return (
        <button className="ArrowDown" onClick={scrollDown} disabled={buttonDisable}>
            <Arrow />
        </button>
    )
}

export default memo(ArrowDown)
