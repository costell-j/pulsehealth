import Hero from "../../components/hero/Hero";
import CallToAction from "../../components/call-to-action/CallToAction";
import content from "./content.json";
import InfoCard from "../../components/info-card/InfoCard";
import { useState } from "react";
import GuideFilter from "../../components/guide-filter/GuideFilter";
import cards from "./guidecards.json";
import medications from "../../components/images/icon-medications.png";
import appointments from "../../components/images/icon-appointments.png";
import guides from "../../components/images/icon-guides.png";
import conditions from "../../components/images/icon-conditions.png";
import providers from "../../components/images/icon-providers.png";

const images = {
    medications,
    appointments,
    guides,
    conditions,
    providers,
};

const categoryOptions = [...new Set(cards.map((card) => card.miniHead))]
    .map((category) => ({
        value: category,
        label: category
    }));

const Guides = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredCards = selectedCategory
        ? cards.filter((card) => card.miniHead === selectedCategory.value)
        : cards;
    
    return (
        <div className="content-page">
            <Hero
                miniHead={content.hero.miniHead}
                title={content.hero.title}
                description={content.hero.description}
                placeholder={content.hero.placeholder}
            />
            <section id="second-sec">
                <InfoCard
                    miniHead={content.featured.miniHead}
                    title={content.featured.title}
                    description={content.featured.description}
                    color={content.featured.color}
                />
            </section>
            <section id="third-sec">
                <header id="third-sec-header">
                    {content.third.miniHead && <p className="mini-head">{content.third.miniHead}</p>}
                    <h2>{content.third.title}</h2>
                    <p>{content.third.description}</p>
                </header>
                <div className="content guide-container info-grid">
                    <GuideFilter
                        options={categoryOptions}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                    {filteredCards.map((card) => (
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

export default Guides;
