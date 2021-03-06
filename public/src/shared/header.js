import {useState} from 'react';
import logo from './wf-full-logo.png'
import {FiMenu, IoClose} from "react-icons/all";

function Header() {
    const [navMenu, setNavMenu] = useState(true)


    const showMenu = () => {
        var x = document.getElementById('mobile-menu')
        x.style.height = '96px'
        setNavMenu(false)
    }
    const hideMenu = () => {
        var x = document.getElementById('mobile-menu')
        if (x.style.height === '96px') {
            x.style.height = '0px'
            setNavMenu(true)
        }
    }
    return (
        <div className='spacer'>
            <div className="Header">
                <div className='container align-start'>
                    <div className='row'>
                        <div className="logo col-6 col-xl-4">
                            <a href='#'>
                                <img src={logo} alt='logo'/>
                            </a>
                        </div>
                        {/*<div className="icons col-6">*/}
                        {/*    {navMenu ? <FiMenu*/}
                        {/*        className='hamburger'*/}
                        {/*        onClick={showMenu}>*/}
                        {/*    </FiMenu> : <div className='closeIcon'><IoClose*/}
                        {/*        className='close'*/}
                        {/*        onClick={hideMenu}/>*/}
                        {/*    </div>}*/}

                        {/*</div>*/}

                        {/*<div*/}
                        {/*    className="menu col-12 col-xl-4"*/}
                        {/*    id='menu'*/}
                        {/*    onBlurCapture={hideMenu}>*/}
                        {/*    <ul>*/}
                        {/*        <li><a href='#'>Home</a></li>*/}
                        {/*        <li><a href='#'>Live Fish</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            {/*<div className='mobile-menu' id='mobile-menu'>*/}
            {/*    <ul>*/}
            {/*        <li><a href='#'>Home</a></li>*/}
            {/*        <li><a href='#'>Live Fish</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
}

export default Header;
