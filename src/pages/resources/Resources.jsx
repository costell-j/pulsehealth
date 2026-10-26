import Hero from "../../components/hero/Hero";
import CallToAction from "../../components/call-to-action/CallToAction";
import content from "./content.json";
import CategoryCard from "../../components/category-card/CategoryCard";
import categories from "./categories.json";
import InfoCard from "../../components/info-card/InfoCard";
import cards from "./infocards.json";
import FeatureBanner from "../../components/feature-banner/FeatureBanner";
import FaqItem from "../../components/faq-item/FaqItem";
import faqs from "./faqs.json";
import preventative_care from "../../components/images/icon-preventative-care.png";
import vaccines from "../../components/images/icon-vaccines.png";
import first_aid from "../../components/images/icon-first-aid.png";
import healthy_eating from "../../components/images/icon-healthy-eating.png";

const images = {
    preventative_care,
    vaccines,
    first_aid,
    healthy_eating,
};

const Resources = () => {
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
                {faqs.length > 0 && (
                    <div className="faq-list">
                        <FaqItem
                            question={faqs[0].question}
                            answer={faqs[0].answer}
                        /> {/* will make funcitonal later ;-; */}
                    </div>
                )}
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

export default Resources;
