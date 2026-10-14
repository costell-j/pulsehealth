import "./Dropdown.css"

const Dropdown = ({isOpen}) => {
    return(
        // eslint-disable-next-line no-undef
        <nav id="drop-down" className={isOpen ? "" : "hidden"}>
            <a href="medication.html">
                <div className="drop-div">
                    Medications
                </div>
            </a>
            <a href="conditions.html">
                <div className="drop-div">
                    Health Conditions
                </div>
            </a>
            <a href="doctors.html">
                <div className="drop-div">
                    Doctors & Providers
                </div>
            </a>
            <a href="appointments.html">
                <div className="drop-div">
                    Appointments & Care
                </div>
            </a>
            <a href="resources.html">
                <div className="drop-div">
                    Health Resources
                </div>
            </a>
            <a href="guides.html">
                <div className="drop-div">
                    Guides
                </div>
            </a>
        </nav>
    );
};

export default Dropdown;