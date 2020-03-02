import React from 'react';

const Menu = props => (
    <div className="menu">
        <div className="overlay" onClick={props.overlayClickHandler}></div>
        <nav>
            <nav-item><span>&#x2699;</span>&nbsp;Settings</nav-item>
        </nav>
    </div>
);

export default Menu