import "./Header.css";
import { useState } from "react";
import logo from "./images/pulse-logo.png";
import menu from "./images/icon-menu.png";
import Navigation from "../navigation/Navigation";
import Dropdown from "../dropdown/Dropdown";
import Search from "../search/Search";
import {NavLink} from "react-router-dom";


const Header = (e) => {
    const[menuOpen, setMenuOpen] = useState(false);
    return(
        <>
            <header id="main-header">
                <NavLink to="/">
                    <div className="logo">
                    <img className="pulses-logo" src={logo} alt="pulse logo" />
                        <h1>Pulse</h1>
                    </div>
                </NavLink>
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
        </>
        
    );
};

export default Header;