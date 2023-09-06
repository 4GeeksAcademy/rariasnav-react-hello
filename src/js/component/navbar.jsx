import React from "react";

const Navbar= () => {
	return (
		<div className="bg-dark">
            <nav className="navbar navbar-expand-sm ">
                <div className="container-fluid ">
                    <a className="navbar-brand col-8 text-light" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white-50" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white-50" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white-50" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white-50" href="#">Contact</a>
                            </li>
                        </ul>                
                    </div>
                </div>
            </nav>
        </div>
	);
};

export default Navbar;