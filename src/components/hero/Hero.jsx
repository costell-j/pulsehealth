import HeroSearch from "../hero-search/HeroSearch";
import TopicCard from "../topic-card/TopicCard.jsx";
import topics from "../topic-card/TopicCard.json";
import "./Hero.css";
import medications from "../images/icon-medications.png";
import conditions from "../images/icon-conditions.png";
import providers from "../images/icon-providers.png";
import guides from "../images/icon-guides.png"
const images = {
    medications,
    conditions,
    providers,
    guides
};

const Hero =(e) => {
    return(
        <section id="first-sec" className="column">
                <div className="content one hero-text">
                    <h3 className="mini-head">Health information made simple</h3>
                    <h1>Clear answers for every <br />health question.</h1>
                    <p>Explore relatable, easy-to-understand information about medications, health conditions, providers, and everyday care -- all in one calm place</p>
                    <HeroSearch />
                </div>
                <div className="content one hero-panel">
                    <div id="explore-health">
                        <header id="exp-head">
                            <h3>Explore health topics</h3>
                            <div><h4>For everyday care</h4></div>
                        </header>
                        <div id="topics">
                            {topics.map((topic) => (
                                <TopicCard
                                    key={topic._id}
                                    img_src={images[topic.img_src]}
                                    title={topic.title}
                                    color={topic.color}
                                    description={topic.description}
                                    link={topic.link}
                                    alt={topic.alt}
                                />
                            ))}
                        </div>
                        <div id="start-basic">
                            <h3>Start with the basics</h3>
                            <p>understand a topic before your next appointment</p>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Hero;