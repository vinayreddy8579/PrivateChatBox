import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message/Message'
import './Messages.css'

export default function Messages({messages,name}) {
    return (
        <div className="messages">
            <ScrollToBottom >
                {messages.map((message,i)=>{
                    return(
                        <div key={i}>
                        <Message message={message} name={name} />
                        </div>
                    )
                })}
            </ScrollToBottom>
        </div>
    )
}
