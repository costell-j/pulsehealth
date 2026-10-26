import Hero from "../../components/hero/Hero";
import CallToAction from "../../components/call-to-action/CallToAction";
import content from "./content.json";
import CategoryCard from "../../components/category-card/CategoryCard";
import categories from "./categories.json";
import InfoCard from "../../components/info-card/InfoCard";
import cards from "./infocards.json";
import FeatureBanner from "../../components/feature-banner/FeatureBanner";
import preventative from "../../components/images/icon-preventative-care.png";
import heart from "../../components/images/icon-heart-circulation.png";
import diabetes from "../../components/images/icon-diabetes.png";
import allergies from "../../components/images/icon-allergies.png";

const images = {
    preventative,
    heart,
    diabetes,
    allergies,
};

const Medications = () => {
    return (
        <div className="content-page">
            <Hero
                miniHead={content.hero.miniHead}
                title={content.hero.title}
                description={content.hero.description}
                placeholder={content.hero.placeholder}
            />
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

export default Medications;
