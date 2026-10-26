import HeroSearch from "../hero-search/HeroSearch";
import "./Hero.css";



const Hero =({ miniHead, title, description, placeholder, children }) => {
    return(
        <section id="first-sec" className="column">
                <div className="content one hero-text">
                    <h3 className="mini-head">{miniHead}</h3>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <HeroSearch 
                        placeholder={placeholder}
                    />
                </div>
                {children}
            </section>
    );
};

export default Hero;