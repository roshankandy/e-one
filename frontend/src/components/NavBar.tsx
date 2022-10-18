import Logo from "../images/eone_logo.png"
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img src={Logo}></img>
            </div>
            <div className="menu-container">
                <li className="menu-item"><Link to="/">Home</Link></li>
                <li className="menu-item"><Link to="/about-us">About</Link></li>
                <li className="menu-item"><Link to="/services">Services</Link></li>
                <li className="menu-item"><Link to="/contact">Contact</Link></li>
                <li className="menu-item"><Link to="/term-and-condition">Terms & Conditions</Link></li>
            </div>
            <div className="menu-container" style={{gap:"3px"}}>
                <li className="menu-item borderd"><a href="">Sign in</a></li>
                <li className="menu-item borderd"><a href="">Register</a></li>
            </div>
        </div>
    )
}

export default NavBar