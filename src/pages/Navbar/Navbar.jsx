import React from "react";
import './Navbar.css'; 
const Navbar = () => {
    return(
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navbar-brand" href="/">
                            <img src="/src/assets/images/logo.png" alt="Bootstrap" width="60" height="60"></img>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav justify-content-end">
                        <div className="derecha">
                            <li className="nav-item">
                                <a className="navbar-brand" href="/login">
                                    LOGIN
                                </a>
                            </li>
                        </div>
                    </ul>
                    <ul className="nav justify-content-end">
                        <div className="derecha">
                            <li className="nav-item">
                                <a className="navbar-brand" href="/login">
                                    ABOUT
                                </a>
                            </li>
                        </div>
                    </ul>
                    <ul className="nav justify-content-end">
                        <div className="derecha">
                            <li className="nav-item">
                                <a className="navbar-brand" href="/login">
                                    WHAT WE DO
                                </a>
                            </li>
                        </div>
                    </ul>
                    <ul className="nav justify-content-end">
                        <div className="derecha">
                            <li className="nav-item">
                                <a className="navbar-brand" href="/login">
                                    CONTACT
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
    )
};

export default Navbar;