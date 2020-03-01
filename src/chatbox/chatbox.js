import React from 'react'
import Message from './components/message'
import InputMessage from './components/input'


class Chatbox extends React.Component {
    render () {
        return (
            <div className="Chatbox">
                <div className="container">
                  <Message/>
                  <div className="message-input">
                    <InputMessage/>
                  </div>
                </div>
            </div>
        )
    }
}



export default Chatbox