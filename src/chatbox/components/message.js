import React from 'react'

function Message(props) {
    return (
        <li className={"Message " + (props.username === 'user0000' ? 'right' : 'left')}>
            
            <div className="bubble">
                <span className="label">{props.username === 'user0000' ? 'You' : props.username}</span>
                <span className="msg">{props.text}</span>
                <span className="time">{props.time}</span>
            </div>
            
        </li>
    )
}

export default Message