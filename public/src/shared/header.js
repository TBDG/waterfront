import logo from '../wf-logo-web.png'
import {GiHamburgerMenu} from "react-icons/all";

function Header() {

    const showMenu = () => {
        var x = document.getElementById('menu')
        if (x.style.display === 'inline-block') {
            x.style.display = 'none'
        } else {
            x.style.display = 'inline-block'
        }
    }

    return (
        <div className="Header row">
            {/*<div className="container">*/}
            <div className="logo col-6 col-lg-4">
                <img src={logo} alt='logo'/>
            </div>
            <div className="icons col-6">
                <GiHamburgerMenu
                    classname='hamburger'
                    onClick={showMenu}>
                </GiHamburgerMenu>
            </div>

            <div className="menu col-12 col-lg-4" id='menu'>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Live Fish</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
