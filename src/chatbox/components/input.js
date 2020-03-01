import React from 'react';

class InputMessage extends React.Component {
    render () {
        return (
            <div className="InputMessage">
                <textarea type="text" placeholder="Enter your message"></textarea>
                <button type="submit" title="Enter"><span>&#x27A5;</span></button>
            </div>
        )
    }
}

export default InputMessage