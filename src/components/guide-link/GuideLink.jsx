import { NavLink } from "react-router-dom"
const GuideLink = ({ link, description }) => {
    return(
        <>
            <hr />
            <NavLink to={link}>
                <div className="link">
                    <p>{description}</p>
                    <p>&rarr;</p>
                </div>
            </NavLink>
        </>
    )
}

export default GuideLink;