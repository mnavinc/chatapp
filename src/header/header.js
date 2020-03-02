import React from 'react';
import search from './../assets/images/search.png'
const Header = props => (
    <header className="Header">
        <h1><span onClick={props.sideBarToggleClickHandler} className="ic">&#x2630;</span>&nbsp;HEALTH<strong>BOT</strong><span className="ic close"><img src={search} /></span></h1>
    </header>
);

export default Header