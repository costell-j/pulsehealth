import Hero from "../../components/hero/Hero";
import CallToAction from "../../components/call-to-action/CallToAction";
import content from "./content.json";
import InfoCard from "../../components/info-card/InfoCard";
import GuideCard from "../../components/guide-card/GuideCard";
import GuideModal from "../../components/guide-modal/GuideModal";
import { API_BASE_URL } from "../../config";
import { useEffect, useState } from "react";
import GuideFilter from "../../components/guide-filter/GuideFilter";
import GuideForm from "../../components/guide-form/GuideForm";

const Guides = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const handleGuideAdded = (newGuide) => {
    setGuides((prev) => [...prev, newGuide]);
    setSelectedCategory(null);
    setSubmitStatus("Guide added successfully!");
    setIsFormOpen(false);
  };

  const categoryOptions = [
    ...new Set(guides.map((guide) => guide.category)),
  ].map((category) => ({
    value: category,
    label: category,
  }));

  const filteredGuides = selectedCategory
    ? guides.filter((guide) => guide.category === selectedCategory.value)
    : guides;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/guides`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load guides");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Guides received:", data);
        setGuides(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

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
          {content.third.miniHead && (
            <p className="mini-head">{content.third.miniHead}</p>
          )}
          <h2>{content.third.title}</h2>
          <p>{content.third.description}</p>
        </header>
        <div className="content guide-container info-grid">
          <GuideFilter
            options={categoryOptions}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          {loading && <p>Loading guides...</p>}
          {error && <p role="alert">Error: {error}</p>}
          {!loading &&
            !error &&
            filteredGuides.map((guide) => (
              <GuideCard
                image={`${API_BASE_URL}${guide.img_name}`}
                key={guide._id}
                title={guide.title}
                description={guide.description}
                category={guide.category}
                read_time={guide.read_time}
                color={guide.color}
                onClick={() => setSelectedGuide(guide)}
              />
            ))}
          <button
            id="add-guide-btn"
            className="btn"
            type="button"
            onClick={() => setIsFormOpen(true)}
          >
            + Add Guide
          </button>
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
      {selectedGuide && (
        <GuideModal
          guide={selectedGuide}
          onClose={() => setSelectedGuide(null)}
        />
      )}

      {isFormOpen && (
        <GuideForm
          onClose={() => setIsFormOpen(false)}
          onGuideAdded={handleGuideAdded}
        />
      )}
    </div>
  );
};

export default Guides;
