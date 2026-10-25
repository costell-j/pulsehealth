import "./TopicCard.css";
import {NavLink} from "react-router-dom";

const TopicCard = ({ img_src, title, color, description, link, alt }) => {
    return (
        <NavLink to={link}>
            <div className={color}>
                <img src={img_src} alt={alt} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </NavLink>
    );
};

export default TopicCard;
