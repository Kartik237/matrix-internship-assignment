import React from "react";
import "../styles/NavBar.css";
import SearchBar from "./SearchBar";
import HamburgerIcon from "./icons/HamburgerIcon";

const NavBar = ({ setSideBarExpanded }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo-wrapper">
                <button
                    className="nav-toggler"
                    onClick={() => setSideBarExpanded((prev) => !prev)}
                >
                    <HamburgerIcon />
                </button>
                <div className="navbar-logo-container">
                    <span className="logo-text">NFTify</span>
                </div>
            </div>
            <div className="nav-button-container">
                <button className="connect">Connect</button>
            </div>
            <SearchBar />
        </nav>
    );
};

export default NavBar;
