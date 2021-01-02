import {useState} from 'react';
import logo from "https://cdn.shopify.com/s/files/1/0397/0940/9439/files/Water_front_logo_300x300.png?v=1606259958"

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="icons"></div>
            <div className="menu"></div>
        </div>
    );
}

export default Header;
