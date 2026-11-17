import "./GuideForm.css";
import { useState } from "react";
import { API_BASE_URL } from "../../config";

const GuideForm = ({ onClose, onGuideAdded }) => {
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    text: "",
    category: "",
    read_time: "",
    img_name: "/images/icon-guides.png",
    color: "lightteal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/guides`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add guide");
      }

      onGuideAdded(data.guide);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="guide-modal-overlay" onClick={onClose}>
      <section
        className="guide-form-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-form-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header id="guide-form-header">
          <h2 id="guide-form-title">Add a Health Guide</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="guide-title">Guide Title</label>
            <input
              id="guide-title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
              minLength={3}
              maxLength={100}
            />
          </div>

          <div className="form-field">
            <label htmlFor="guide-description">Short Description</label>
            <textarea
              id="guide-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={500}
              rows={3}
            />
          </div>

          <div className="form-field">
            <label htmlFor="guide-text">Article Content</label>
            <textarea
              id="guide-text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              minLength={20}
              rows={8}
            />
          </div>

          <div className="form-field">
            <label htmlFor="guide-category">Category</label>
            <input
              id="guide-category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              required
              minLength={3}
            />
          </div>

          <div className="form-field">
            <label htmlFor="guide-read-time">Estimated Reading Time</label>
            <input
              id="guide-read-time"
              name="read_time"
              type="text"
              value={formData.read_time}
              onChange={handleChange}
              placeholder="5 minute read"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="guide-color">Guide Color</label>
            <select
              id="guide-color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
            >
              <option value="lightteal">Teal</option>
              <option value="lightgold">Gold</option>
              <option value="lightblue">Blue</option>
              <option value="lightlavender">Lavender</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="guide-image">Guide Icon</label>
            <select
              id="guide-image"
              name="img_name"
              value={formData.img_name}
              onChange={handleChange}
              required
            >
              <option value="/images/icon-guides.png">General Health</option>
              <option value="/images/icon-medications.png">Medications</option>
              <option value="/images/icon-appointments.png">
                Appointments
              </option>
              <option value="/images/icon-conditions.png">Conditions</option>
              <option value="/images/icon-providers.png">Providers</option>
            </select>
          </div>

          {formError && (
            <p className="guide-form-error" role="alert">
              {formError}
            </p>
          )}

          <div className="form-actions">
            <button type="submit" disabled={submitting}>
              {submitting ? "Adding..." : "Add Guide"}
            </button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default GuideForm;
