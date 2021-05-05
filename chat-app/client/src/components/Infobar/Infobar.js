import React from 'react'
import './Infobar.css'

export default function Infobar({room}) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src='/onlineIcon.png' alt="online icon" className="onlineIcon"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">
                    <img src='/closeIcon.png' alt="close icon" className="closeIcon"/>   
                </a>
            </div>
        </div>
    )
}
