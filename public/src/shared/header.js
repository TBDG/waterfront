import logo from '../wf-logo-web.png'
import {GiHamburgerMenu, GrFormClose} from "react-icons/all";

function Header() {

    const showMenu = () => {
        var x = document.getElementById('menu')
        if (x.style.height === '92px') {
            x.style.height = '0px'
        } else {
            x.style.height = '92px'
        }
    }

    return (
        <div className="Header row">
            <div className="logo col-6 col-xl-4">
                <a href='#'>
                    <img src={logo} alt='logo'/>
                </a>
            </div>
            <div className="icons col-6">
                    <GiHamburgerMenu
                        classname='hamburger'
                        onClick={showMenu}>
                    </GiHamburgerMenu>
            </div>

            <div
                className="menu col-12 col-xl-4"
                id='menu'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Live Fish</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
