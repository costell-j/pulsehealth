import "./Navigation.css"

const Navigation = (e) => {
    return(
        <nav id="header-nav" className="hide-small">
            <a href="#">Medications</a>
            <a href="#">Health Conditions</a>
            <a href="#">Doctors & Providers</a>
            <a href="#">Appointments & Care</a>
            <a href="#">Health Resources</a>
            <a href="#">Guides</a>
        </nav>
    );
};

export default Navigation;