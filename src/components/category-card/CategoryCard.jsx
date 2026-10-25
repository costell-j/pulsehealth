import { NavLink } from "react-router-dom"
const CategoryCard = ({ img_src, title, description, link, color=""}) => {
    return(
        <NavLink to={link}>
            <div className={`guide ${color}`}>
                <img className="logo-img" src={img_src} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </NavLink>

    );
};

export default CategoryCard;