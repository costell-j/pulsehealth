import { NavLink } from "react-router-dom";
import "./FeatureBanner.css";

const FeatureBanner = ({ title, description, button, link }) => {
    return (
        <aside id="third-sec-box" className="feature-banner">
            <div className="text"><h2>{title}</h2><p>{description}</p></div>
            <NavLink className="btn" to={link}>{button} <span aria-hidden="true">→</span></NavLink>
        </aside>
    );
};
export default FeatureBanner;
