import React from 'react';
class InputMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.state.message)
        this.setState({
            message: '',
        })
    }

    render () {
        return (
            <form className="InputMessage" onSubmit={this.handleSubmit}>
                <textarea disabled={this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text"></textarea>
                <button type="submit" title="Send"><span>&#x27A5;</span></button>
            </form>
        )
    }
}

export default InputMessage