import "./Dropdown.css";
import {NavLink} from "react-router-dom";

const Dropdown = ({isOpen}) => {
    return(
       <nav id="drop-down" className={isOpen ? "" : "hidden"}>
            <NavLink to="/medications">
                <div className="drop-div">
                    Medications
                </div>
            </NavLink>
            <NavLink to="/conditions">
                <div className="drop-div">
                    Health Conditions
                </div>
            </NavLink>
            <NavLink to="/doctors">
                <div className="drop-div">
                    Doctors & Providers
                </div>
            </NavLink>
            <NavLink to="/appointments">
                <div className="drop-div">
                    Appointments & Care
                </div>
            </NavLink>
            <NavLink to="/resources">
                <div className="drop-div">
                    Health Resources
                </div>
            </NavLink>
            <NavLink to="/guides">
                <div className="drop-div">
                    Guides
                </div>
            </NavLink>
        </nav>
    );
};

export default Dropdown;