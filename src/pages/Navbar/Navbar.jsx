import React from "react";
import './Navbar.css'; 
const Navbar = () => {
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="navbar-brand" href="/">
                        <img src="/src/assets/images/logo.png" alt="Bootstrap" width="50" height="50"></img>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/login">
                            HOLA
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;