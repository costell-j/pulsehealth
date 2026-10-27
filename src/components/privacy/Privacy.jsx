import "./Privacy.css"
import privacy from "./privacy.json"
import logo from "../images/pulse-logo.png"

const Privacy = ({ dialogRef })  => {
    return(
        <dialog 
        id="privacy-modal"
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
                <h1>Privacy at Pulse</h1>
            </header>
            <main>
                <h3>{privacy.head1}</h3>
                <p>{privacy.para1}</p>
                <h3>{privacy.head2}</h3>
                <p>{privacy.para2}</p>
                <p>{privacy.para3}</p>
                <h3>{privacy.head3}</h3>
                <p>{privacy.para4}</p>
                <h3>{privacy.head4}</h3>
                <p>{privacy.para5}</p>
                <h3>{privacy.head5}</h3>
                <p>{privacy.para6}</p>
                <p id="disclaimer">{privacy.disclaimer}</p>
            </main>
        </dialog>
    );
}

export default Privacy;