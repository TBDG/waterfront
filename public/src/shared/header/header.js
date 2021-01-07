import {useState} from 'react';

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                Logo Pants
                {/*<img src={logo}/>*/}
            </div>
            <div className="icons"></div>
            <div className="menu"></div>
        </div>
    );
}

export default Header;
