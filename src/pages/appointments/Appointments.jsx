import Hero from "../../components/hero/Hero";
import CallToAction from "../../components/call-to-action/CallToAction";
import content from "./content.json";
import CategoryCard from "../../components/category-card/CategoryCard";
import categories from "./categories.json";
import Checklist from "../../components/checklist/Checklist";
import checklists from "./checklists.json";
import step1 from "../../components/images/icon-1.png";
import step2 from "../../components/images/icon-2.png";
import step3 from "../../components/images/icon-3.png";

const images = {
    step1,
    step2,
    step3,
};

const Appointments = () => {
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
                            imageClassName="logo-img circle-img darkblue"
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
                <div className="content guide-container info-grid checklist-grid">
                    {checklists.map((checklist) => (
                        <Checklist
                            key={checklist._id}
                            title={checklist.title}
                            miniHead={checklist.miniHead}
                            items={checklist.items}
                            ordered={checklist.ordered}
                            color={checklist.color}
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

export default Appointments;
