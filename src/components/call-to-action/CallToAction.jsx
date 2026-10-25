import { NavLink } from "react-router-dom";

const CallToAction = ({ miniHead, title, description, button, link }) => {
    return(
        <div id="cta">
            <h3 className="mini-head">{miniHead}</h3>
            <h1>{title}</h1>
            <p>{description}</p>
            <NavLink to={link}>
                <div class="btn">
                    <p>{button} &rarr;</p>
                </div>
            </NavLink>
            <p>Pulse is an educational resource and does not replace advice from a qualified healthcare professional.</p>
        </div>
    )
}

export default CallToAction;