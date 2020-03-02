import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import Messagelist from './components/messageList'
import InputMessage from './components/input'
import { tokenUrl, instanceLocator } from './../config'
import UIfx from 'uifx';
import sentMp3 from './sent.mp3'
const sent = new UIfx(sentMp3);

class Chatbox extends React.Component {
    constructor() {
        super()
        this.state = {
            roomId: '818574e9-b55d-4079-9076-67df932e7123',
            messages: [
                {
                    senderId: 'admin',
                    text: 'Welcome! This is Axela. How do i help you?'
                },
                {
                    senderId: 'user0000',
                    text: 'Great!'
                },
                {
                    senderId: 'admin',
                    text: 'Good to hear! I am great as well'
                }
            ],
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
    } 

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'user0000',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser
            })
            .catch(err => console.log('error on connecting: ', err))
    }

    subscribeToRoom(roomId) {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    const object = {
                        senderId: 'user0000',
                        text: message
                    }
                    this.setState({
                        messages: [...this.state.messages, object]
                    })
                }
            }
        })
            .then(room => {
                this.setState({
                    roomId: room.id
                })
            })
            .catch(err => console.log('error on subscribing to room: ', err))
    }

    sendMessage(text) {
        //this.currentUser.sendMessage({
        //    text,
        //    roomId: this.state.roomId
        //})
        // console.log(text);
        if (text !== '' && typeof text !== undefined) {
            const object = {
                senderId: 'user0000',
                text: text
            }
            this.setState({
                messages: [...this.state.messages, object]
            })
            sent.play()
        }
    }

    render () {
        return (
            <div className="Chatbox">
                <div className="container">
                    <Messagelist roomId={this.state.roomId}
                        messages={this.state.messages} />
                    <div className="message-input">
                        <InputMessage sendMessage={this.sendMessage}/>
                    </div>
                </div>
            </div>
        )
    }
}



export default Chatbox