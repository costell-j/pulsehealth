import "./Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation = (e) => {
    return(
        <nav id="header-nav" className="hide-small">
            <NavLink to="/medications">Medications</NavLink>
            <NavLink to="/conditions">Health Conditions</NavLink>
            <NavLink to="/doctors">Doctors & Providers</NavLink>
            <NavLink to="/appointments">Appointments & Care</NavLink>
            <NavLink to="/resources">Health Resources</NavLink>
            <NavLink to="/guides">Guides</NavLink>

            
        </nav>
    );
};

export default Navigation;