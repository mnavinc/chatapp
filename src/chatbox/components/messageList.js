import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message';

class Messagelist extends React.Component {

      
  componentDidMount() {
      const node = ReactDOM.findDOMNode(this)
      this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    //this.scrollToBottom();
  }

  componentDidUpdate() {
    //this.scrollToBottom();
      if (this.shouldScrollToBottom) {
          const node = ReactDOM.findDOMNode(this)
          node.scrollTop = node.scrollHeight
      }
  }

  //scrollToBottom() {
  //  this.el.scrollIntoView({ behavior: 'smooth' });
  //} 

    render() {
        console.log(this.props)
        return (
            <div className="container-inner">
                <ul>
                    {this.props.messages.map((message, index) => {
                        return (
                            <Message key={message.id} username={message.senderId} text={message.text} />
                        )
                    })} 
                </ul>
                <div ref={el => { this.el = el; }} />
            </div>
        )
    }
}

export default Messagelist