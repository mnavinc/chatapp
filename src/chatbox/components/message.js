import React from 'react';

class Message extends React.Component {

      
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  } 

    render () {
        return (
            <div className="container-inner">
                <ul>
                    <li className="Message">
                        <span className="label">Name</span>
                        <div className="bubble">
                            <span className="msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem tellus. Aliquam fermentum quam sit amet venenatis tempor. Morbi maximus neque</span>
                        </div>
                        <span className="time">11:31pm</span>
                    </li>
                    <li className="Message right">
                        <span className="label">Name</span>
                        <div className="bubble">
                            <span className="msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem tellus. Aliquam fermentum quam sit amet venenatis tempor. Morbi maximus neque</span>
                        </div>
                        <span className="time">11:31pm</span>
                    </li>
                    <li className="Message">
                        <span className="label">Name</span>
                        <div className="bubble">
                            <span className="msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem tellus. Aliquam fermentum quam sit amet venenatis tempor. Morbi maximus neque</span>
                        </div>
                        <span className="time">11:31pm</span>
                    </li>
                    <li className="Message right">
                        <span className="label">Name</span>
                        <div className="bubble">
                            <span className="msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem tellus. Aliquam fermentum quam sit amet venenatis tempor. Morbi maximus neque</span>
                        </div>
                        <span className="time">11:31pm</span>
                    </li>
                </ul>
                <div ref={el => { this.el = el; }} />
            </div>
        )
    }
}

export default Message