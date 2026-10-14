import "./Header.css";
import { useState } from "react";
import logo from "./images/pulse-logo.png";
import menu from "./images/icon-menu.png";
import Navigation from "../navigation/Navigation";
import Dropdown from "../dropdown/Dropdown";
import Search from "../search/Search";

const Header = (e) => {
    const[menuOpen, setMenuOpen] = useState(false);
    return(
        <div>
            <header id="main-header">
                <div className="logo">
                    <img src={logo}  className="pulse-logo" alt="Logo" />
                    <h1>Pulse</h1>
                </div>
                <Navigation />
                <Search />
                <button
                    type="button"
                    className="hide-big"
                    onClick={(e) => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <img src={menu} className="icon hide-big" id="hamburger" />
                </button>
            </header>
            <Dropdown isOpen={menuOpen} />
        </div>
        
    );
};

export default Header;