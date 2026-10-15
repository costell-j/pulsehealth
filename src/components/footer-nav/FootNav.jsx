import "./FootNav.css"

const FootNav = (e) => {
    return(
        <nav id="foot-nav">
                <div id="explore">
                    <h5>Explore</h5>
                    <ul>
                        <a href="medication.html"><li>Medications</li></a>
                        <a href="conditions.html"><li>Health Conditions</li></a>
                        <a href="doctors.html"><li>Doctors & Providers</li></a>
                    </ul>
                </div>
                <div id="learn">
                    <h5>Learn</h5>
                    <ul>
                        <a href="resources.html"><li>Health Resources</li></a>
                        <a href="guides.html"><li>Health Guides</li></a>
                        <a href="appointments.html"><li>Appointments & Care</li></a>
                    </ul>
                </div>
                <div id="about">
                    <h5>About</h5>
                    <ul>
                        <a href="#"><li>About Pulse</li></a>
                        <a href="#" id="contact-open"><li>Contact</li></a>
                        <a href="#"><li>Privacy</li></a>
                    </ul>
                </div>
        </nav>
    );
};

export default FootNav;