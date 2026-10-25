import { NavLink } from "react-router-dom";
const FeaturedGuide = ({ img_src, alt, title, description, link }) => {
    return (
        <div className="guide">
            <img src={img_src} id="feat-card-img" alt={alt} />
            <div>
                <h4 className="mini-head">featured guides</h4>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <NavLink to={link}>Read the guide</NavLink>
        </div>
    );
};

export default FeaturedGuide;