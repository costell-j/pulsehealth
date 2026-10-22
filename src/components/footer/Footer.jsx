import "./Footer.css";
import logo from "../header/images/pulse-logo.png";
import FootNav from "../footer-nav/FootNav";
import {NavLink} from "react-router-dom";

const Footer = (e) =>{
    return(
        <footer>
            <header id="foot-header">
                <NavLink to="/">
                    <div className="logo">
                    <img className="pulses-logo" src={logo} alt="pulse logo" />
                        <h1>Pulse</h1>
                    </div>
                </NavLink>
                <p>Clear health information for everyday decisions</p>
            </header>
            <FootNav />
            <hr />
            <p>Pulse provides general educational information only. It is not a subsitute for professional medical advice, diagnosis, or treatment</p>
            <p>&copy; 2026 Pulse Health Information</p>
        </footer>
    );
};

export default Footer;