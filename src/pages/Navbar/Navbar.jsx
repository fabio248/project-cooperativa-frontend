import React from "react";

const Navbar = () => {
    return(
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a class="navbar-brand" href="/">
                        <img src="/src/assets/images/logo.png" alt="Bootstrap" width="50" height="50"></img>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="navbar-brand" href="/login">
                            HOLA
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;