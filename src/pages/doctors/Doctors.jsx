import "./Doctors.css"
import Hero from "../../components/hero/Hero";
import CallToAction from "../../components/call-to-action/CallToAction";
import content from "./content.json";
import CategoryCard from "../../components/category-card/CategoryCard";
import categories from "./categories.json";
import InfoCard from "../../components/info-card/InfoCard";
import cards from "./infocards.json";
import FeatureBanner from "../../components/feature-banner/FeatureBanner";
import primary_care from "../../components/images/icon-primary-care.png";
import heart_circulation from "../../components/images/icon-heart-circulation.png";
import mental_health from "../../components/images/icon-mental-health.png";
import womens_health from "../../components/images/icon-womens-health.png";

const images = {
    primary_care,
    heart_circulation,
    mental_health,
    womens_health,
};

const Doctors = () => {
    return (
        <div className="content-page">
            <Hero
                miniHead={content.hero.miniHead}
                title={content.hero.title}
                description={content.hero.description}
                placeholder={content.hero.placeholder}
            >
                <div class="content one hero-panel">
                    <div id="provider-map">
                        <h2>Explore a healthcare location</h2>
                        <p>View the location on the map below.</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26463.67073235349!2d-81.02543360791437!3d33.99359092978867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdoctors%20near%20me!5e0!3m2!1sen!2sus!4v1791825037729!5m2!1sen!2sus"></iframe>
                    </div>
                </div>
            </Hero>
            <section id="second-sec">
                <header id="second-sec-head">
                    <div>
                        <h2>{content.second.title}</h2>
                        <p>{content.second.description}</p>
                    </div>
                </header>
                <div className="content guide-container category-grid">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category._id}
                            img_src={images[category.img_src]}
                            title={category.title}
                            description={category.description}
                            link={category.link}
                            color={category.color}
                        />
                    ))}
                </div>
            </section>
            <section id="third-sec">
                <header id="third-sec-header">
                    {content.third.miniHead && <p className="mini-head">{content.third.miniHead}</p>}
                    <h2>{content.third.title}</h2>
                    <p>{content.third.description}</p>
                </header>
                <div className="content guide-container info-grid">
                    {cards.map((card) => (
                        <InfoCard
                            key={card._id}
                            miniHead={card.miniHead}
                            title={card.title}
                            description={card.description}
                            img_src={images[card.img_src]}
                            color={card.color}
                            link={card.link}
                            linkText={card.linkText}
                            read_time={card.read_time}
                        />
                    ))}
                </div>
                <FeatureBanner
                    title={content.banner.title}
                    description={content.banner.description}
                    button={content.banner.button}
                    link={content.banner.link}
                />
            </section>
            <section id="fourth-section">
                <div className="content cta-container">
                    <CallToAction
                        title={content.cta.title}
                        description={content.cta.description}
                        button={content.cta.button}
                        link={content.cta.link}
                    />
                </div>
            </section>
        </div>
    );
};

export default Doctors;
