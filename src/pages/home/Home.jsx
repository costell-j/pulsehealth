import Hero from "../../components/hero/Hero";
import CategoryCard from "../../components/category-card/CategoryCard";
import categories from "./categories.json";
import medications from "../../components/images/icon-medications.png";
import conditions from "../../components/images/icon-conditions.png";
import providers from "../../components/images/icon-providers.png";
import appointments from "../../components/images/icon-appointments.png";
import guides from "../../components/images/icon-guides.png"
import FeaturedGuide from "../../components/featured-guide/FeaturedGuide";
import cards from "./featuredcards.json";
import links from "./guidelinks.json";
import TopicCard from "../../components/topic-card/TopicCard.jsx";
import topics from "../../components/topic-card/TopicCard.json";
import GuideLink from "../../components/guide-link/GuideLink";
import featured_img from "../../components/images/background-prescriptions.png";
import guideCards from "./guidecards.json";
import GuideCard from "../../components/guide-card/GuideCard";
import CallToAction from "../../components/call-to-action/CallToAction";
const images = {
    medications,
    conditions,
    providers,
    appointments,
    guides,
    featured_img
};


const Home = (e) => {
    return(
        <>
            <Hero 
            miniHead="Health information made simple"
            title={<>Clear answers for every <br />health question.</>}
            description="Explore relatable, easy-to-understand information about medications, health conditions, providers, and everyday care -- all in one calm place"
            placeholder="Search medications, conditions, guides..."
        >
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
        </Hero>
            <section id="second-sec">
                <header id="second-sec-head">
                    <div>
                        <h3 className="mini-head">Start exploring</h3>
                        <h1>Your guide to everyday health</h1>
                    </div>
                    <a href="guides.html">View all topics</a>
                </header>
                <div className="content guide-container">
                    {categories.map((category) =>(
                        <CategoryCard
                            key={category._id}
                            img_src={images[category.img_src]}
                            title={category.title}
                            description={category.description}
                            link={category.link}
                        />
                    ))}
                </div>
            </section>
            <section id="third-sec">
                <div className="content featured-card one">
                    {cards.map((card) => (
                        <FeaturedGuide
                            key={card._id}
                            img_src={images[card.img_src]}
                            alt={card.alt}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                        />
                    ))}
                </div>
                <div className="content feautred-text one">
                    <h3 className="mini-head">Health information that meets you where you are</h3>
                    <h1>Less jargon.</h1>
                    <h1>More confidence</h1>
                    <h3 className="featured-description">From learning what a new medication does to preparing questions for a provider, Pulse helps you arrive at your next step feeling informed</h3>
                    {links.map((link) => (
                        <GuideLink
                            key={link._id}
                            link={link.link}
                            description={link.description}
                        />
                    ))}
                </div>
            </section>
            <section id="fourth-section">
                <div className="text">
                    <h3 className="mini-head">Explore the latest</h3>
                    <h1>Helpful guides for real life</h1>
                    <h4>Practical health information to help you ask better questions and make sense of what you find.</h4>
                </div>
                <div className="content guide-container">
                    {guideCards.map((gCard)  => (
                        <GuideCard
                            key={gCard._id}
                            title={gCard.title}
                            description={gCard.description}
                            link={gCard.link}
                        />
                    ))}
                </div>
                <div className="content cta-container">
                    <CallToAction 
                        miniHead="Keep exploring"
                        title="Health information should feel easier to find"
                        description="Browse trusted starting points for your questions, whenever you need them"
                        button="Explore health topics"
                        link="/guides"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;