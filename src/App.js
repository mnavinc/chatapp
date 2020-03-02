import React from 'react'
import './App.css';
import Header from './header/header'
import Chatbox from './chatbox/chatbox';
import Menu from './menu/menu';


class App extends React.Component {
    state = {
        sideBarOpen: false
    };
    sideBarToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideBarOpen: !prevState.sideBarOpen };
        });
    };

    overlayClickHandler = () => {
        this.setState({ sideBarOpen: false });
    };
    render() {
        let sideBar;
        if (this.state.sideBarOpen) {
            sideBar = <Menu overlayClickHandler={this.overlayClickHandler} />
        }
        return (
            <div className="App">
                <Header sideBarToggleClickHandler={this.sideBarToggleClickHandler} />
                <Chatbox />
                {sideBar}
            </div>
        );
    }
}
export default App;



