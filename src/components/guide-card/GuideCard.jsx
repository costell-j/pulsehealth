import "./GuideCard.css"

const GuideCard = ({ title, description, category, image, read_time, color}) => {
    return(
        <article className={`guide-card ${color || ""}`}>
            {image && (<img src={image} alt="" className="logo-img" />)}

            {category && <h3 className="mini-head">{category}</h3>}

            <h4>{title}</h4>
            <p>{description}</p>

            {read_time && <p>{read_time}</p>}
        </article>            
    )
}

export default GuideCard;