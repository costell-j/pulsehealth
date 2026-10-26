import { NavLink } from "react-router-dom";
import "./InfoCard.css";

const InfoCard = ({ miniHead, title, description, img_src, color = "", link, linkText = "Learn more", read_time }) => {
    return (
        <article className={`guide info-card ${color}`}>
            {img_src && <img className="logo-img" src={img_src} alt="" />}
            {miniHead && <p className="mini-head">{miniHead}</p>}
            <h3>{title}</h3>
            <p>{description}</p>
            {read_time && <small>{read_time}</small>}
            {link && <NavLink to={link}>{linkText || "Learn more"} <span aria-hidden="true">→</span></NavLink>}
        </article>
    );
};
export default InfoCard;
