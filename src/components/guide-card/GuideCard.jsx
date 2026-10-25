import { NavLink } from "react-router-dom"
import "./GuideCard.css"

const GuideCard = ({ title, description, link }) => {
    return(
        <div className="guide">
            <h4>{title}</h4>
            <p>{description}</p>
            <NavLink to={link}>Read guide</NavLink>
        </div>            
    )
}

export default GuideCard;