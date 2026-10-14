import "./Header.css";
import logo from "./images/pulse-logo.png";
import menu from "./images/icon-menu.png";
import Navigation from "../navigation/Navigation";
import Dropdown from "../dropdown/Dropdown";
import Search from "../search/Search";

const Header = (e) => {
    return(
        <div>
            <header id="main-header">
                <div className="logo">
                    <img src={logo}  className="pulse-logo" alt="Logo" />
                    <h1>Pulse</h1>
                </div>
                <Navigation />
                <Search />
                <img src={menu} className="icon hide-big"></img>
            </header>
            <Dropdown />
        </div>
        
    );
};

export default Header;