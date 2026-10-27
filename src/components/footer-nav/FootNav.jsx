import "./FootNav.css"
import {NavLink} from "react-router-dom";

const FootNav = ( { onContactOpen, onAboutOpen,  onPrivacyOpen }) => {
    return(
        <nav id="foot-nav">
                <div id="explore">
                    <h5>Explore</h5>
                    <ul>
                        <NavLink to="/medications"><li>Medications</li></NavLink>
                        <NavLink to="/conditions"><li>Health Conditions</li></NavLink>
                        <NavLink to="/doctors"><li>Doctors & Providers</li></NavLink>
                    </ul>
                </div>
                <div id="learn">
                    <h5>Learn</h5>
                    <ul>
                        <NavLink to="/resources"><li>Health Resources</li></NavLink>
                        <NavLink to="/guides"><li>Health Guides</li></NavLink>
                        <NavLink to="/appointments"><li>Appointments & Care</li></NavLink>
                    </ul>
                </div>
                <div id="about">
                    <h5>About</h5>
                    <ul>
                        <li>
                            <button type="button" className="modal-btn" onClick={onAboutOpen}>
                                About Pulse
                            </button>
                        </li>
                        <li>
                            <button type="button" className="modal-btn" onClick={onContactOpen}>
                                Contact
                            </button>
                        </li>
                        <li>
                            <button type="button" className="modal-btn" onClick={onPrivacyOpen}>
                                Privacy
                            </button>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};

export default FootNav;