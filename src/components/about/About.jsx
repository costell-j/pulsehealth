import "./About.css"
import logo from "../images/pulse-logo.png"
import about from "./about.json";

const About = ({ dialogRef }) => {
    return(
        <dialog 
        id="about-modal"
        ref={dialogRef}
        onClick={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
    
            const clickedOutside =
                event.clientX < bounds.left ||
                event.clientX > bounds.right ||
                event.clientY < bounds.top ||
                event.clientY > bounds.bottom;
    
            if (clickedOutside) {
                event.currentTarget.close();
            }
        }}>
            <header>
                <img src={logo} alt="pulse logo" className="icon"/>
                <h1>About Pulse</h1>
            </header>
            <main>
                <h3>{about.motto}</h3>
                <p>{about.intro}</p>
                <p>{about.para1}</p>
                <p>{about.para2}</p>
                <h3>{about.cta}</h3>
                <p id="disclaimer">{about.disclaimer}</p>
            </main>
        </dialog>
    );
};

export default About;