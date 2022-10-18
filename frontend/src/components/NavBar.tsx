import Logo from "../images/eone_logo.png"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img src={Logo}></img>
            </div>
            <div className="menu-container">
                <li className="menu-item"><a href="">Home</a></li>
                <li className="menu-item"><a href="">About</a></li>
                <li className="menu-item"><a href="">Services</a></li>
                <li className="menu-item"><a href="">Contact</a></li>
                <li className="menu-item"><a href="">Terms & Conditions</a></li>
            </div>
            <div className="menu-container" style={{gap:"3px"}}>
                <li className="menu-item borderd"><a href="">Sign in</a></li>
                <li className="menu-item borderd"><a href="">Register</a></li>
            </div>
        </div>
    )
}

export default NavBar